import React, { useState } from "react";
import { Button, Layout, Drawer, Col, Row } from "antd";
import "antd/dist/antd.min.css";
import "../index.css";
import { Link } from "react-router-dom";
import { Image } from "antd";

import DrawerFile from "./DrawerFile";

import image1 from "../assets/notification.png";
import image2 from "../assets/add-user.png";
import image3 from "../assets/create-project.png";
import useWindowDimensions from "../customHooks/getWindowDimensions";

const { Header } = Layout;

function Headercom() {
  const { width } = useWindowDimensions();

  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        backgroundColor: "black",
      }}
    >
      <Row>
        <Col span={12}>
          <DrawerFile></DrawerFile>
        </Col>
        <Col span={12}>
          <Row style={{ justifyContent: "flex-end" }}>
            <Col span={3}>
              <Link to="/">
                <Image
                  preview={false}
                  src={image1}
                  width={25}
                  height={25}
                ></Image>
              </Link>
            </Col>
            <Col span={3}>
              <Link to="/">
                <Image
                  preview={false}
                  src={image2}
                  width={25}
                  height={25}
                ></Image>
              </Link>
            </Col>
            <Col span={3}>
              <Link to="/">
                <Image
                  preview={false}
                  src={image3}
                  width={25}
                  height={25}
                ></Image>
              </Link>
            </Col>
            {width > 725 ? (
              <Col span={6}>
                <Button className="log-out" type="primary">
                  Log Out
                </Button>
              </Col>
            ) : null}
          </Row>
        </Col>
      </Row>
    </Header>
  );
}

export default Headercom;
