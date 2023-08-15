import { Col, Row, Button } from "react-bootstrap";
import { course_map } from '../data/map_data'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/map.css'

export default function CourseEach() {
    const id = (window.location.href).slice(-2),
        temp = findData(id),
        category = temp[0],
        data = temp[1],
        os = OS(data.os),
        structure = Stru(data.structure),
        web_program = WebPro(data.web_program),
        open_source = OpenSour(data.open_source),
        team = Team(data.team);

    function findData(id) {
        for (var i = 0; i < course_map.length; i++) {
            for (var j = 0; j < course_map[i].inner_data.length; j++) {
                if (course_map[i].inner_data[j].course_id === id) {
                    return [course_map[i].category, course_map[i].inner_data[j]];
                }
            }
        }
    }

    function OS(os) {
        if (os === "") {
            return <div />
        }
        return <div>作業系統核心</div>
    }

    function Stru(structure) {
        if (structure === "") {
            return <div />
        }
        return <div>硬體架構與設計</div>
    }

    function WebPro(web_program) {
        if (web_program === "") {
            return <div />
        }
        return <div>網路程式設計</div>
    }

    function OpenSour(open_source) {
        if (open_source === "") {
            return <div />
        }
        return <div>開源工具之熟悉與使用</div>
    }

    function Team(team) {
        if (team == "") {
            return <div />
        }
        return <div>團隊合作與溝通協調</div>
    }


    return (
        < div className="course_container" >
            <div className="course_bg">
                <Row>
                    <Col sm={3} className='center'>
                        <h5>
                            【{category}課程】
                        </h5>
                    </Col>
                    <Col sm={9}>
                        <h2>
                            {data.course_name}
                        </h2>
                    </Col>
                    <hr />

                    <Col sm={12} className='orange_word'>
                        <p><b>{data.course_depiction}</b></p>
                    </Col>
                    <Col sm={12}>
                        <p>{data.note}</p>
                    </Col>

                    <Col sm={2} className='light_green inside center'>
                        核心能力
                    </Col>
                    <Col sm={10} className='green inside'>
                        <Row>
                            <Col sm={1} />
                            <Col sm={2} className="center">
                                {os}
                            </Col>
                            <Col sm={2} className="center">
                                {structure}
                            </Col>
                            <Col sm={2} className="center">
                                {web_program}
                            </Col>
                            <Col sm={2} className="center">
                                {open_source}
                            </Col>
                            <Col sm={2} className="center">
                                {team}
                            </Col>
                        </Row>
                    </Col>

                    <Col sm={4} className='inside'>
                        開課單位
                    </Col>
                    <Col sm={8} className='inside'>
                        {data.department}
                    </Col>

                    <Col sm={12} md={4}></Col>
                    <Col sm={12} md={8}>
                        <hr />
                    </Col>

                    <Col sm={4} className='inside'>
                        授課教師
                    </Col>
                    <Col sm={8} className='inside'>
                        {data.lecturer}
                    </Col>

                    <Col sm={12} md={4}></Col>
                    <Col sm={12} md={8}>
                        <hr />
                    </Col>

                    <Col sm={4} className='inside'>
                        開課學期
                    </Col>
                    <Col sm={8} className='inside'>
                        {data.course_time.map((time) => {
                            return (
                                <Row>
                                    <Col sm={12}>
                                        {time.semester}
                                    </Col>
                                </Row>
                            );
                        })}
                    </Col>
                    <Col sm={12} md={4}></Col>
                    <Col sm={12} md={8}>
                        <hr />
                    </Col>


                    <Col sm={4} className='inside'>
                        課程時段
                    </Col>
                    <Col sm={8} className='inside'>
                        {data.course_time.map((time) => {
                            return (
                                <Row>
                                    <Col sm={6}>
                                        課號：{time.id}
                                    </Col>
                                    <Col sm={6}>
                                        {time.day} &nbsp; {time.time}
                                    </Col>
                                </Row>
                            );
                        })}
                    </Col>
                    <Col sm={12} md={4}></Col>
                    <Col sm={12} md={8}>
                        <hr />
                    </Col>

                    <Col sm={4} className='inside'>
                        學分數
                    </Col>
                    <Col sm={8} className='inside'>
                        {data.credit}學分，每週{data.credit}小時
                    </Col>
                    <Col sm={12} md={4}></Col>
                    <Col sm={12} md={8}>
                        <hr />
                    </Col>

                    <Col sm={4} className='inside'>
                        教材下載
                    </Col>
                    <Col sm={8} className='inside'>
                        <Row>
                            {data.material.map((each) => {
                                return (
                                    <Col xs={6} style={{ minHeight: "30px" }}>
                                        <a href={each.data_link} download>{each.title}</a>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                    <Col sm={12} md={4}></Col>
                    <Col sm={12} md={8}>
                        <hr />
                    </Col>

                    <Col sm={4} className='inside'>
                        課程概述
                    </Col>
                    <Col sm={8} className='inside'>
                        <p>{data.course_info_ch}</p>
                    </Col>
                    <Col sm={12} md={4}></Col>
                    <Col sm={12} md={8}>
                        <hr />
                    </Col>

                    <Col sm={4} className='inside'>
                        English Description
                    </Col>
                    <Col sm={8} className='inside'>
                        <p>{data.course_info_en}</p>
                    </Col>
                    <Col sm={12} md={4}></Col>
                    <Col sm={12} md={8}>
                        <hr />
                    </Col>

                    <Col sm={12}>
                        <br />
                    </Col>
                    <Col sm={12} className='center'>
                        <a href={"/map"}>
                            <Button className="blue">
                                上一頁
                            </Button>
                        </a>
                    </Col>
                </Row>
            </div >
        </div >
    )
}