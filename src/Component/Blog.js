import React,{Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import './css.css';

class Blog extends Component{
    render(){
        return(
            <div id='blogmain' >
                <h2>Blog</h2>
<Row style={{marginRight:0}}id='rowblog' > 

<Col xl={6}>
<img src={require('../img/car2.jpg')} id='blogimg' alt='img'  />
</Col>


<Col xl={6}>
<div id='blogcard'>
    <div id='pblog'>Morbi euismod dui ipsum, eu co ndimentum sem porta sit amaecenas Euismod,
         nunc nec pellentesque lacinia, nunc nisi mattis mauri s, ac tempor lacus turpis at leo.
          Cras consequat iaculis lorem, id vehicula erat mattis quis.
           Vivamus laoreet velit justo, in ven e natis purus pretium sit amet.
            Praesent lectus tortor, tincidu nt in consectetur vestibulum, ultrices nec neque.
             Praesent nec sagittis mauris.
         Fusce convallis nunc neque</div>
         <div  id='pblog'>Integer egestas aliquam interdum. Nulla ante diam, interdum nec tempus eu, feugiat vel erat.
              Integer aliquam mi quis accumsan porta. Donec faucibus at tellus convallis cursus.
               Vestibulum mattis orci dolor, nec sagittis diam bibendum sodales. Duis risus ligula, 
               mattis a adipiscing sed, viverra ac nunc. Quisque nec turpis nisi. Proin lobortis nisl ut orci euismod,
              et lobortis est scelerisque. Sed eget volutpat ipsum. Integer fringilla leo</div>
</div>
</Col>
 </Row>

 <Row style={{marginRight:0}}id='rowblog' > 
<Col xl={6}>
<img src={require('../img/car2.jpg')}  id='blogimg' alt='img'  />
</Col>


<Col xl={6}>
<div id='blogcard'>
    <div id='pblog'>Morbi euismod dui ipsum, eu co ndimentum sem porta sit amaecenas Euismod,
         nunc nec pellentesque lacinia, nunc nisi mattis mauri s, ac tempor lacus turpis at leo.
          Cras consequat iaculis lorem, id vehicula erat mattis quis.
           Vivamus laoreet velit justo, in ven e natis purus pretium sit amet.
            Praesent lectus tortor, tincidu nt in consectetur vestibulum, ultrices nec neque.
             Praesent nec sagittis mauris.
         Fusce convallis nunc neque</div>
         <div  id='pblog'>Integer egestas aliquam interdum. Nulla ante diam, interdum nec tempus eu, feugiat vel erat.
              Integer aliquam mi quis accumsan porta. Donec faucibus at tellus convallis cursus.
               Vestibulum mattis orci dolor, nec sagittis diam bibendum sodales. Duis risus ligula, 
               mattis a adipiscing sed, viverra ac nunc. Quisque nec turpis nisi. Proin lobortis nisl ut orci euismod,
              et lobortis est scelerisque. Sed eget volutpat ipsum. Integer fringilla leo</div>
</div>
</Col>
 </Row>
</div>
            // </div>
        )
    }
}
export default Blog;