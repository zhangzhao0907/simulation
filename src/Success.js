import React from 'react';
import { createHashHistory } from "history";
import { Result, Spin } from 'antd';


class Success extends React.Component {

    componentDidMount() {
        this.timerID = setInterval(
            () => this.jump(),
            2000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    jump() {
        let history = createHashHistory();
        history.push({
            pathname: "/result",
        });
        history.go();
    }

    render() {
        return (
            <Result
                status="success"
                title="Successfully Post Your Parameters!"
                subTitle="Please wait a moment for the result page to jump."
                extra={[
                    <Spin size="large" />,
                ]}
            />
        );
    }
}



export default Success;