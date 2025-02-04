function Loading(props){
    return(<div className="w-100 h-100" style={props.loading ? ({ }) : ({  display:"none"  })} className="loading"></div>)
}
export default Loading;