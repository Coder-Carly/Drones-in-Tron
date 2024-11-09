AFRAME.registerComponent('arrowfly',{
    init:function (){

    el=this.el
    document.addEventListener('keydown',(e)=>{
      x=el.getAttribute('position').x
      y=el.getAttribute('position').y
      z=el.getAttribute('position').z 
      xr=el.getAttribute('rotation').x
      yr=el.getAttribute('rotation').y
      zr=el.getAttribute('rotation').z


      if(e.key==='i'){

        y+=0.5
        console.log('i')

      }
      if(e.key==='j'){

        x+=-0.5
        console.log('j')

      }
      if(e.key==='k'){

        y+=-0.5
        console.log('k')

      }
      if(e.key==='l'){

        x+=0.5
        console.log('l')

      }
      if(e.key==='ArrowUp'){

        yr+=20
        console.log('Up')
  
      }
      if(e.key==='ArrowDown'){

        yr+=-20
        console.log('Down')
  
      }
      if(e.key==='ArrowLeft'){

        xr+=-20
        console.log('Left')
  
      }
      if(e.key==='ArrowRight'){

        xr+=20
        console.log('Right')
      }
       el.setAttribute('position',{x:x, y:y, z:z})
       el.setAttribute('rotation',{x:xr, y:yr, z:zr})
    })
    }
})