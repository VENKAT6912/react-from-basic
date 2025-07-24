

function App() {
 

  return (
   
      <div>
       <PostComponent />
      </div>
   
       
  )
}

const style={width:200,backgroundColor:"white",borderRadius:10,
  borderColor:"gray",borderWidth:1
}

function PostComponent(){
  return <div style={style}>
    <img src={"https://img.freepik.com/premium-vector/cube-logo-design-abstract-cube-logo-design_219523-223.jpg?w=2000"}
    style={{
      width:20,
      height:20,
      borderRadius:20
    }}
    />



  </div>
}



export default App
