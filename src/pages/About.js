import { Col, Row, Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/map.css'

export default function About() {
    return (
        <div className="c_container">
            <div className="content">
                <h2 className="blue_word">關於本計畫</h2>
                <br />
                <Row>
                    <Col sm={12} md={3}>
                        <b>指導單位</b>
                    </Col>
                    <Col sm={12} md={9}>
                        教育部 資訊及科技教育司
                        <hr />
                    </Col>

                    <Col sm={12} md={3}>
                        <b>執行單位</b>
                    </Col>
                    <Col sm={12} md={9}>
                        國立臺北科技大學 資訊工程系
                        <hr />
                    </Col>

                    <Col sm={12} md={3}>
                        <b>計畫目標</b>
                    </Col>
                    <Col sm={12} md={9}>
                        <ol style={{
                            listStyle: 'cjk-ideographic'
                        }}>
                            <li>深化非資訊領域系所學生軟體學習歷程，培育智慧創新跨域潛力人才。</li>
                            <li>發展智慧創新軟體服務及產官學研各界合作生態體系，培育跨域軟體服務實踐人才。</li>
                            <li>運用開源軟體發展模式，系統性培育開源軟體創作前瞻人才。</li>
                        </ol>
                        <hr />
                    </Col>

                    <Col sm={12} md={3}>
                        <b>執行策略</b>
                    </Col>
                    <Col sm={12} md={9}>
                        <ol style={{
                            listStyle: 'cjk-ideographic'
                        }}>
                            <li><b>需求導向策略：</b>基於產業數位人才及各類應用領域導入智慧創新之需求，規劃適性之智慧創新人才培育模式。</li>
                            <li><b>實務增能策略：</b>鼓勵導入設計思考等使用者需求與議題，並熟悉業界所需之軟體開發實務及程式開發工具。</li>
                            <li><b>群體協作策略：</b>鏈結業界、公部門或公益團體，透過跨域合作與群體協作設計和開發軟體，解決實際場域重要問題。</li>
                            <li><b>開放資源策略：</b>善用全球開放軟體、開放平臺及開放教材資源，並透過開源軟體及開源社群加速研究與應用的進展。</li>
                            <li><b>永續發展策略：</b>強化校園智慧創新生態體系，促成師資及教學資源扎根於示範學校，培育學生完整智慧創新學習歷程。</li>
                        </ol>
                        <hr />
                    </Col>

                    <Col sm={12} md={3}>
                        <b>計畫架構</b>
                    </Col>
                    <Col sm={12} md={9}>
                    </Col>
                </Row>
            </div>
        </div>
    )
}