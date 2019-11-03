import React from 'react';


class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    //コンポーネント生成時処理
    componentDidMount(){
        //timerIDはsetInterval()の戻り値
        this.timerID = setInterval(
            () => this.tick(), 1000);
    }

    //コンポーネント破棄時処理
    componentWillUnmount(){
        //setInterVal処理を削除する
        clearInterval(this.timerID);
    }

    //state更新メソッド
    tick(){
        this.setState({date: new Date()});
    }


    render(){
        return(
            <div>
                <h1 className='h1'>Hello, world</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;