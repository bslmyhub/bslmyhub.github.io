//拆分组件
class Item extends React.Component{
    render(){
        return(
            <div className="item" style={{left:this.props.left}}>
                <h3>音乐播放界面</h3>
                <h4>在这个项目中，我主要负责前端页面的布局、后台框架、后天管理系统的建立。前端部分包含使用了CSS3和html5。在后台页面搭建过程中，为了迅速开发，使用了bootstrap，后台语言用php</h4>
            </div>
        )
    }
}
class Btn extends React.Component{
    render(){
        var img=<img src={`${this.props.isActive?'images/b':'images/w'}.png`}/>;
        return(
            <div className="btn" onClick={()=>{this.props.click(this.props.index)}}>
                {img}
            </div>
        );
    }
}
class Timeline extends React.Component{
    constructor(props){
        super(props);
        this.state={
            index:0
        };
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.click =this.click.bind(this);
    }
    //组件内部函数中 this是指向组件本身的
    //自定义函数中并不是
    prev(){
        //ps上一次的state对象
        this.setState((ps)=>
        ({index:(ps.index-1<0)?0:(ps.index-1)}))
    }
   next(){
       const len=this.props.data.length;
       this.setState((ps)=>
        ({index:(ps.index+1>=len-1)?(len-1):(ps.index+1)}))
    }
    click(id){
        this.setState((ps)=>({index:id}))
    }
    render(){
        var Items = this.props.data.map((v,i)=>
        <Item key={i} left={400*(i+1)}/>
        );
        var Btns = this.props.data.map((v,i)=>
            <Btn key={i} isActive={i===this.state.index} index={i} click={this.click}/>
        );
        return (
            <div className="timeline">
                <div className="slides" style={{transform:`translate3d(${-400*this.state.index}px,0,0)`}}>
                    {Items}
                 </div>
                <div className="btns">
                    {Btns}
                </div>
                <div className="sideone" onClick={this.prev}> &lt; </div>
                <div className="sidetwo" onClick={this.next}> &gt; </div>
            </div>
        )
    }
}
class App extends React.Component{
    render(){
        return(
            <div>
               <Timeline data={data}/>
            </div>
        );
    }
}
const  data=[
    1,2,3,4,5,6
];
const con=[

]

ReactDOM.render(<App/>,document.getElementById('page'));






