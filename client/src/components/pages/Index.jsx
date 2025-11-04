import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { Draggable } from "@fullcalendar/interaction" // needed for dayClick

import { Col, Row, Button, Modal, Card, Tag } from 'antd';
import { createEvent, handleCurrentMonth, listEvent } from '../functions/fullcalendar'
import './Index.css'
import moment from 'moment'


const Index = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [values, setValues] = useState({
        title: '',
        start: '',
        end: '',
        color: ''
    })

    const [events, setEvents] = useState([])
    const [currentEvent, setCurrentEvent] = useState([])

    const department = [
        { id: '1', name: 'แผนกบัญชี', color: 'red' },
        { id: '2', name: 'IT', color: 'yellow' },
        { id: '3', name: 'Sale', color: 'green' },
    ]

    const loadData = () => {
        listEvent()
            .then(res => {
                setEvents(res.data)
                // console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }

    const drag = () => {
        let dragable = document.getElementById('external-event')
        // console.log(dragable)
        new Draggable(dragable, {
            itemSelector: ".fc-event",
            eventData: function (eventEl) {
                let id = eventEl.getAttribute('id')
                let title = eventEl.getAttribute('title')
                let color = eventEl.getAttribute('color')

                return {
                    id: id,
                    title: title,
                    color: color
                }
            }
        })
    }

    useEffect(() => {
        loadData()
        drag()
    }, [])

    const handleRecieve = (eventInfo) => {
        // console.log(eventInfo)
        let value = {
            id: eventInfo.draggedEl.getAttribute('id'),
            title: eventInfo.draggedEl.getAttribute('title'),
            color: eventInfo.draggedEl.getAttribute('color'),
            start: eventInfo.dateStr,
            end: moment(eventInfo.dateStr).add(+1, "days").format('YYYY-MM-DD')
        }
        console.log('value', value)
        createEvent(value)
            .then(() => {
                loadData()
            }).catch(err => {
                console.log(err)
            })
    }

    const currentMonth = (info) => {
        const m = info.view.calendar.currentDataManager.data.currentDate
        const mm = moment(m).format('M')
        handleCurrentMonth({ mm })
            .then(res => {
                setCurrentEvent(res.data)
            }).then(err => {
                console.log(err)
            })
    }

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        console.log(values)
        createEvent(values)
            .then(() => {
                setValues({ ...values, title: '' })
                loadData()
            }).catch(err => {
                console.log(err)
            })
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setValues({ ...values, title: '' })
        setIsModalOpen(false);
    };

    const handleSelect = (info) => {
        showModal()
        // console.log(info)
        setValues({
            ...values,
            start: info.startStr,
            end: info.endStr

        })
    }
    const onChangeValues = (e) => {
        console.log(e.target.value)
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const d = moment(new Date()).format('DD/MM/YYYY')
    const r = new Date()
    // console.log(d)
    const _filterDate = currentEvent.filter((item) => {
        return d == (moment(item.start).format('DD/MM/YYYY'))
    })

    const _betweenDate = currentEvent.filter(item => {
        return r >= moment(item.start) && r < moment(item.end)
    })
    // console.log(betweenDate)

    return (
        <>
            <Row>
                <Col span={6}>
                    <Card>
                        <div id="external-event">
                            <ul>
                                {department.map((item, index) =>
                                    <li className='fc-event' id={item.id} title={item.name} color={item.color} key={index} style={{ backgroundColor: item.color }}>{item.name}

                                    </li>
                                )}
                            </ul>
                        </div>
                    </Card>
                    <ol>
                        {currentEvent.map((item, index) =>
                            <li key={index}>
                                {d == moment(item.start).format('DD/MM/YYYY')
                                    ? <>{moment(item.start).format('DD/MM/YYYY') + '-' + item.title}<Tag color='green'>วันนี้</Tag></>
                                    : r >= moment(item.start) && r < moment(item.end)
                                        ? <>{moment(item.start).format('DD/MM/YYYY') + '-' + item.title}<Tag color='yellow'>อยู่ระหว่างดำเนินการ</Tag></>
                                        : <>{moment(item.start).format('DD/MM/YYYY') + '-' + item.title}</>
                                }
                            </li>
                        )}
                    </ol>
                </Col>
                <Col span={18}>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        events={events}
                        selectable={true}
                        select={handleSelect}
                        drop={handleRecieve}
                        datesSet={currentMonth}
                    />
                </Col>
                <Modal
                    title="Basic Modal"
                    closable={{ 'aria-label': 'Custom Close Button' }}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <input name='title' value={values.title} onChange={onChangeValues} />
                    <select name='color' onChange={onChangeValues}>
                        <option key={999} value="">--กรุณาเลือกแผนก--</option>
                        {department.map((item, index) =>
                            <option key={index} value={item.color} style={{ backgroundColor: item.color }}>{item.name}</option>
                        )}
                    </select>
                </Modal>
            </Row>
        </>
    )
}

export default Index