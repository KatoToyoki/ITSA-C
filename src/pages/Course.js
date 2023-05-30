import { Col, Row, Button } from "react-bootstrap";
import { course_map } from '../data/map_data'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faMicrochip, faGlobe, faLayerGroup, faPeopleGroup, faMousePointer } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/map.css'

export default function Course() {

    return (
        <div className="c_container">
            <div className="content">
                <h2 className="blue_word">
                    知識地圖
                </h2>

                <h5 className="orange_word"><b>核心能力</b></h5>
                <p className="inside">
                    本計畫訂定了系統軟體與韌體人才所需之五大核心能力如下：
                    <br />
                    <b className="os_color"><FontAwesomeIcon icon={faComputer} /> &nbsp;作業系統核心能力：</b>
                    <br />瞭解作業系統之基礎概念與其在系統軟體中之角色，以及作業系統的核心概念，並掌握相關技術開發之能力。
                    <br />
                    <b className="stru_color"><FontAwesomeIcon icon={faMicrochip} /> &nbsp;硬體架構與設計能力：</b>
                    <br />瞭解常見硬體之協定內容、硬體描述語言之定義，並具備硬體規範之閱讀能力。
                    <br />
                    <b className="webPro_color"><FontAwesomeIcon icon={faGlobe} /> &nbsp;網路程式設計能力：</b>
                    <br />撰寫程式語言或應用軟體進行網路連接，並且熟悉不同型態的網路協定，以及如何使用網路程式設計進行系統軟體中所需之連線實作。
                    <br />
                    <b className="openSour_color"><FontAwesomeIcon icon={faLayerGroup} /> &nbsp;開源工具之熟悉與使用能力：</b>
                    <br />使用適當的開源軟體工具解決產業相關問題，並使用Git與GitHub進行版本管理以及使用Jenkins 進行持續整合測試。
                    <br />
                    <b className="team_color"><FontAwesomeIcon icon={faPeopleGroup} /> &nbsp;團隊合作與溝通協調能力：</b>
                    <br />願意與不同專長背景同學交換知識、想法、價值觀等資訊，並實現跨領域小組中討論核心問題。
                </p>

                <div>
                    {course_map.map((data) => {
                        return (
                            <Row>
                                <Col sm={12} md={2} >
                                    <h5><b>{data.category}</b></h5>
                                    {data.depiction}
                                </Col>
                                <Col sm={12} md={10}>
                                    <hr />
                                </Col>
                                <Col sm={12} md={12} className="inside">
                                    {data.inner_data.map((datas) => {
                                        var os = datas.os,
                                            structure = datas.structure,
                                            web_program = datas.web_program,
                                            open_source = datas.open_source,
                                            team = datas.team;

                                        os = Os(os);
                                        structure = Stru(structure);
                                        web_program = WebPro(web_program);
                                        open_source = OpenSour(open_source);
                                        team = Team(team);

                                        function Os(os) {
                                            if (os === "") {
                                                return <div> &nbsp;&nbsp;&nbsp;</div>
                                            }
                                            return <b className="os_color"><FontAwesomeIcon icon={faComputer} /></b>
                                        }

                                        function Stru(structure) {
                                            if (structure === "") {
                                                return <div> &nbsp;&nbsp;&nbsp;</div>
                                            }
                                            return <b className="stru_color"><FontAwesomeIcon icon={faMicrochip} /></b>
                                        }

                                        function WebPro(web_program) {
                                            if (web_program === "") {
                                                return <div> &nbsp;&nbsp;&nbsp;</div>
                                            }
                                            return <b className="webPro_color"><FontAwesomeIcon icon={faGlobe} /></b>
                                        }

                                        function OpenSour(open_source) {
                                            if (open_source === "") {
                                                return <div> &nbsp;&nbsp;&nbsp;</div>
                                            }
                                            return <b className="openSour_color"><FontAwesomeIcon icon={faLayerGroup} /></b>
                                        }

                                        function Team(team) {
                                            if (team === "") {
                                                return <div> &nbsp;&nbsp;&nbsp;</div>
                                            }
                                            return <b className="team_color"><FontAwesomeIcon icon={faPeopleGroup} /></b>

                                        }

                                        return (
                                            <Row>
                                                <Col sm={12} md={9} className='map_inside'>
                                                    < Row >
                                                        <Col sm={6} className='map_inside'>
                                                            <a href={"/map/course/" + datas["course_id"]} className='map_a'>
                                                                <div className="map_btn">
                                                                    <b>{datas.course_name}</b> &nbsp; <FontAwesomeIcon icon={faMousePointer} />
                                                                </div>
                                                            </a>
                                                        </Col>
                                                        <Col xs={2} className='center'>
                                                            <b>{datas.credit}學分</b>
                                                        </Col>
                                                        <Col xs={4} className='center inside'>
                                                            <div className="">
                                                                <b>{datas.course_time[0].semester}</b>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col sm={12} md={3} className=' center'>
                                                    <Row className="center ">
                                                        <Col xs={2} className=" dot">{os}</Col>
                                                        <Col xs={2} className=" dot">{structure}</Col>
                                                        <Col xs={2} className=" dot">{web_program}</Col>
                                                        <Col xs={2} className=" dot">{open_source}</Col>
                                                        <Col xs={2} className=" dot">{team}</Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        );
                                    })}
                                </Col>
                            </Row >
                        );
                    })}
                </div >
            </div >
        </div >
    )
}