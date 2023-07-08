import { Col, Row, Button } from "react-bootstrap";
import { news } from "../data/news_data";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'

export default function NewsEach() {
    const id = (window.location.href).slice(-3),
        data = findData(id);

    var contents = data.content.split("\n")

    function findData(id) {
        for (var i = 0; i < news.length; i++) {
            if (news[i].news_id === id) {
                return news[i];
            }
        }
    }

    const convert = (contents) => {
        let cs = []
        for (var i = 0; i < contents.length; i++) {
            console.log(contents[i], contents[i].includes("https://"));
            if (contents[i].includes("https://")) {
                let start;
                for (var j = 0; j < contents[i].length - 8; j++) {
                    if (contents[i].substring(j, j + 8) == "https://") {
                        start = j;
                    }
                }
                cs.push(
                    <span>{contents[i].substring(0, start)}<a href={contents[i].substring(start,)}>{contents[i].substring(start,)}</a></span>
                )
            }
            else {
                cs.push(
                    contents[i]
                )
            }
        }

        return cs.map(item =>
            <div style={{ minHeight: '16px' }}>{item}</div>)
    }

    return (
        <div className="c_container">
            <div className="content">
                <h2 className="blue_word">
                    {data.title}

                </h2>
                <p>
                    {convert(contents)}
                </p>
                <div className="center">
                    {data.image.map((img) => {
                        let images = [];
                        for (let i = 0; i < Object.keys(img).length; i++) {
                            let pointer = "";
                            if (i < 10) {
                                pointer = "0" + "" + i;
                            }
                            else {
                                pointer = "" + i;
                            }

                            images.push(
                                <Col xs={12} sm={12} md={6} lg={4} className="center">
                                    <img src={img["image" + pointer]} width="100%"></img>
                                </Col>
                            );
                        }
                        if (images.length == 1) {
                            return (
                                <div className="center">
                                    <Row style={{ rowGap: '14px' }}>
                                        <Col md={3} lg={4}></Col>
                                        {images}
                                    </Row>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className="center">
                                    <Row style={{ rowGap: '14px' }}>
                                        {images}
                                    </Row>
                                </div>
                            );
                        }
                    })}
                </div>

                <div className="center">
                </div>

                <div className="center">
                </div>

                <br /><hr />

                <div className="center">
                    <a href={"/news"}>
                        <Button className="blue">
                            上一頁
                        </Button>
                    </a>
                </div>
            </div>
        </div >
    )
}