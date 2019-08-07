import React, { Component } from 'react';
import './css.css';
import { Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import ScrollAnimation from 'react-animate-on-scroll';
class Profile extends Component {

    render() {
        return (
            <div id='mainabout'>

{/* <ScrollAnimation animateIn='fadeInRight' animationInDelay='1000' style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                    , flexDirection: 'column'
                }}  > */}
                <Row style={{ marginRight: 0 }}>   <h3 id='why'> عن الشركة</h3></Row>

                <Row style={{ marginRight: 0 }} id='rowabout' >

 
                    <Col xs={12} id='p13' >
                    <p id='proftext1'style={{textAlign:'right'}}>
                        شركة فيض الامين للنقل العام من الشركات الحديثة
                        ، و هي امتداد لأعمال مقاولين في مجالات النقل و تهدف الشركة إلى المساهمة في أنماء الاقتصاد الوطني و تطوير الخبرات العراقية في مجال النقل العام باستثمار راس المال في حقل النقل العام و الاسهام في تنشيط عمليات النقل على اختلاف انواعها و فقا لخطط التنمية القومية و القيام بعمليات نقل المواد و البضائع على اختلاف انواعها و المنتجات النفطية كافة داخل العراق و خارجة و من العراق و اليه و القيام بكل ما يتعلق بها من اعمال كتحميلها و تفريغها و خزنها و قبول متعهدات مع مراعاة احكام قانون النقل النافذ
                         و التعليمات المعمول بها و قانون البنك المركزي العراقي و التعليمات الصادرة بموجبة.
</p>
                    </Col>
                </Row>



                {/* </ScrollAnimation> */}

{/*                 
<ScrollAnimation animateIn='fadeInRight' animationInDelay='1000' style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                    , flexDirection: 'column'
                }}  > */}

                <h3 id='why'style={{marginTop:'5%'}}> و للشركة في سبيل تحقيق أغراضها القيام بما يلي  </h3>
                <Row style={{ marginRight: 0, marginTop: '2%', marginBottom: '2%' }} id='rowaboutarab' >

                    <Col xs={12}>
                        <div style={{ display: 'flex', alignItems: 'flex-start',  flexDirection: 'column', width: '100%',fontSize:'20px' }}>
                            <div style={{ minHeight: '60px',display:'flex',textAlign:'right' }}  id='proftext1' >
                                <div style={{paddingLeft:'10px'}}>
                                    <img src={require('../img/oo.png')} id='ooimage' alt='img'  />
                                </div>
                                تملك الأموال المنقولة وغير المنقولة أو إيجارها وإجراء كافة التصرفات القانونية عليها لغرض تنفيذ نشاطها.
</div>

                            <div style={{ minHeight: '60px',display:'flex',textAlign:'right' }} id='proftext1' >
                            <div style={{paddingLeft:'10px'}}>
                                    <img src={require('../img/oo.png')} id='ooimage' alt='img'  />
                                </div>
                                 إبرام العقود والمعاملات ورهن وبيع أموالها المنقولة وغير المنقولة التي تراها مناسبة ولازمة
                                  للوصول إلى أغراضها مع مراعاة أحكام القانون.

</div>

                            <div  style={{ minHeight: '60px',display:'flex',textAlign:'right' }} id='proftext1'  > 
                            <div style={{paddingLeft:'10px'}}>
                                    <img src={require('../img/oo.png')} id='ooimage' alt='img'  />
                                </div>

                                الدخول في كافة التعهدات والمقاولات التي تدخل في النقل العام مع الدوائر الرسمية ودوائر القطاع المختلط والخاص سواء بمفردها أو بمشاركة الغير والقيام بكافة التصرفات التي تراها مناسبة لخدمة وتحقيق أغراض الشركة.

</div>
                            <div  style={{ minHeight: '60px',display:'flex',textAlign:'right' }} id='proftext1'  >
                            <div style={{paddingLeft:'10px'}}>
                                    <img src={require('../img/oo.png')} id='ooimage' alt='img'  />
                                </div>

                                الاندماج مع الشركات الأخرى عدا التضامنية منها.
</div>
                            <div  style={{ minHeight: '60px',display:'flex',textAlign:'right' }} id='proftext1'  >
                            <div style={{paddingLeft:'10px'}}>
                                    <img src={require('../img/oo.png')} id='ooimage' alt='img'  />
                                </div>

                                استيراد وشراء المكائن والأجهزة والمعدات ومختلف المواد التي تراها تساعد على تحقيق نشاط الشركة.
                            </div>

                            <div  style={{ minHeight: '60px',display:'flex',textAlign:'right' }} id='proftext1'  >
                                  <div style={{paddingLeft:'10px'}}>
                                    <img src={require('../img/oo.png')} id='ooimage' alt='img' />
                                </div>
                                <div>	
                                <span> 	التعامل مع المصارف والمؤسسات المالية وممارسة كافة النشاطات المالية والمصرفية المتعلقة بأعمالها وفتح الاعتمادات والحسابات الجارية لدى المصارف ولها حق الإيداع والسحب وإنشاء وتظهير كافة  </span> 
                                  <span> الأوراق التجارية وقبول الحوالات المستندية وغير المستندية وكذلك الصكوك ومستندات الشحن ومستندات المخازن وطلب التسهيلات المصرفية وإجراء كافة المعاملات التي تخدم أغراضها ونشاط الحركة.  </span>  
                                    
                                      </div>
                           
                            </div>
                        </div>
                    </Col>

                </Row>
                {/* </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInRight' animationInDelay='1000' style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                    , flexDirection: 'column', width: '100%'
                }}  > */}

                <Row style={{ marginRight: 0, marginTop: '3%', marginBottom: '2%' }} >   <h3 id='why'>إدارة الشركة</h3></Row>
                <Row style={{ marginRight: 0, marginBottom: '5%', direction: 'rtl' }} id='rowabout'>
                    <Col xs={12}  >
                        <div style={{ width: '100%', display: 'flex' ,paddingRight:'10px'}} id='proftext1' > تتألف إدارة الشركة من الكوادر الرئيسية التالية وهي كما يلي :</div>
                        <div style={{ width: '100%',  display: 'flex', margin: '5px',textAlign:'right' }}id='proftext1' >
                        <div style={{paddingLeft:'10px'}}>
                                    <img src={require('../img/circle.png')} style={{height:'15px'}} alt='img'  />
                                </div>
                        	مقاول يملك جميع أسهم الشركة وهو المدير المفوض للشركة.</div>
                        <div style={{ width: '100%',  display: 'flex', margin: '5px',textAlign:'right' }} id='proftext1'  >
                        <div style={{paddingLeft:'10px'}}>
                                    <img src={require('../img/circle.png')} style={{height:'15px'}} alt='img'  />
                                </div>
                        	المكتب التنفيذي يتألف من مختصون وذات خبرة طويلة في مجال النقل العام والاستيراد والتصدير لتقديم التوصيــات المطلوبة.</div>
                        <div style={{ width: '100%', display: 'flex', margin: '5px',textAlign:'right' }} id='proftext1' >
                        <div style={{paddingLeft:'10px'}}>
                                    <img src={require('../img/circle.png')} style={{height:'15px'}} alt='img'  />
                                </div>
                        	المحامية رواق فاضل تشغل المكتب القانوني وتتولي الأمور القانونية. </div>
                        <div style={{ width: '100%',  display: 'flex', margin: '5px',textAlign:'right' }} id='proftext1'   >
                        <div style={{paddingLeft:'10px'}}>
                                    <img src={require('../img/circle.png')} style={{height:'15px'}} alt='img'  />
                                </div>
                        	المحاسب القانوني يتولى الأعمال المحاسبية التي تخص الشركة.</div>
                        <div style={{ width: '100%', display: 'flex', margin: '5px',textAlign:'right' }} id='proftext1' >
                        <div style={{paddingLeft:'10px'}}>
                                    <img src={require('../img/circle.png')} style={{height:'15px'}} alt='img'  />
                                </div>
                        	يرتبط بكل من الفئات أعلاه عدة أشخاص وحسب الاختصاص وذلك عند الحاجة. </div>
                    </Col>

                </Row>

                {/* </ScrollAnimation> */}

                {/* <ScrollAnimation animateIn='fadeInRight' animationInDelay='1000' style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                    , flexDirection: 'column', width: '100%'
                }}  > */}
                <Row style={{ marginRight: 0 }}>   <h3 id='why'> التصنيف الرسمي للشركة</h3></Row>
                <Row style={{ marginRight: 0, marginBottom: '5%', direction: 'rtl' }} id='rowabout'>

                    <Col xs={12} style={{ width: '100%' }}>

                        <div style={{ width: '100%', display: 'flex', margin: '5px',textAlign:'right'}} id='proftext1' >
                        <div style={{paddingLeft:'10px'}}>
                                    <img src={require('../img/star.png')} style={{height:'15px'}} alt='img'  />
                                </div>
                             اكتسبت الشركة شهادة التأسيس من وزارة التجارة بالرقم م ش/02- 74216 في 22/11/2009
                            </div>
                        <div style={{ width: '100%',  display: 'flex', margin: '5px',textAlign:'right' }} id='proftext1'  >
                        <div style={{paddingLeft:'10px'}}>
                                    <img src={require('../img/star.png')} style={{height:'15px'}} alt='img'  />
                                </div>
                             
                            حصلت على شهادة ممارسة المهنة والصادرة من اتحاد الناقلين العراقيين بالإضافة هوية عضوية اتحاد الناقلين العراقيين المركز العام.
                            </div>
                        <div style={{ width: '100%',  display: 'flex', margin: '5px',textAlign:'right' }} id='proftext1'   >
                        <div style={{paddingLeft:'10px'}}>
                                    <img src={require('../img/star.png')} style={{height:'15px'}} alt='img'   />
                                </div>
                         حصلت الشركة على (الدرجة الأولى) في اختصاص النقل العام حسب هوية اتحاد الناقليـــــــــن العراقيين 1735 في 6/12/2009 </div>
                        <div style={{ width: '100%',  display: 'flex', margin: '5px',textAlign:'right' }} id='proftext1' >
                        <div style={{paddingLeft:'10px'}}>
                                    <img src={require('../img/star.png')} style={{height:'15px'}} alt='img'  />
                                </div>
                            الانتساب الى غرفة تجارة البصرة بالاختصاص (تجارة عامة ونقل عام) بالرقم 20774 فـــــي
 25 / 4 /2010
</div>

                    </Col>

                </Row>


                {/* </ScrollAnimation> */}

            </div>
        )
    }
}
export default Profile;