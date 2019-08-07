import React, { Component } from 'react';
import './css.css';
import { Row, Col, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
class About extends Component {

    render() {
        return (
            <div id='mainabout'>
                <Container>
                    <ScrollAnimation animateIn='fadeInUp' animationInDelay='1000'  >

                        <div style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                            , flexDirection: 'column', width: '100%', margin: 0, padding: 0
                        }} >
                            <Row style={{ marginRight: 0 }}>   <h3 id='why'>ABOUT</h3></Row>

                            <Row style={{ marginRight: 0 }} id='rowabout' >

                                <p id='p13'style={{textAlign:'left'}}>
                                Fayd Al-Ameen Co. for General Transportation is one of the modern companies, an extension of the
work of contractors in the business of transport. The company aims to contribute to develop the
national economy and the Iraqi expertise in the business of general transport by investing capital in the
business of general transport and contributing to revitalize various types of transport according to
national development plans. Carrying out the transport of materials and goods of all kinds and
petroleum products all inside and outside Iraq and from and to Iraq, and do all related to the work of
loading, unloading and storage and acceptance of undertakings. Taking into account the provisions of
the Law of Transport in force and the instructions in force and the Law of the Central Bank of Iraq and
the instructions issued thereunder 
</p>
                                <Col xs={12}  ></Col>
                            </Row>
                        </div>

                    </ScrollAnimation>
                </Container>
                <Container>
                    <ScrollAnimation animateIn='fadeInUp' animationInDelay='1000'  >

                        <div style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                            , flexDirection: 'column', width: '100%', margin: 0, padding: 0
                        }} >
                            <div id='why' style={{ marginTop: '5%' }}> In order to achieve its objectives, the Company has the right to:  </div>


                            <Row style={{ marginRight: 0, marginTop: '2%', marginBottom: '2%' }} id='rowabout1' >

                                <Col xs={12}>
                                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }} id='proftext1'   >
                                        <div style={{ minHeight: '60px', display: 'flex' }} >
                                            <div style={{ paddingRight: '10px' }}>
                                                <img src={require('../img/oo.png')} id='ooimage' alt='img' />
                                            </div>
                                            own and lease movable and immovable property and to carry out all legal acts thereon for the
                                             purpose of carrying out its activities.
                                                    </div>

                                        <div style={{ minHeight: '60px', display: 'flex' }}  >
                                            <div style={{ paddingRight: '10px' }}>
                                                <img src={require('../img/oo.png')} id='ooimage' alt='img' />
                                            </div>
                                            conclude contracts and transactions and the mortgage and sell of movable and immovable property
which it deems appropriate and necessary to reach its purposes subject to the provisions of the law.
</div>

                                        <div style={{ minHeight: '60px', display: 'flex' }}   >
                                            <div style={{ paddingRight: '10px' }}>
                                                <img src={require('../img/oo.png')} id='ooimage' alt='img' />
                                            </div>
                                            engage in all undertakings and contracting that enter into general transport with the official offices
and offices of the mixed and private sector, either alone or with the participation of others and carry out
all actions that it deems appropriate to serve and achieve the objectives of the company.

</div>
                                        <div style={{ minHeight: '60px', display: 'flex' }}   >
                                            <div style={{ paddingRight: '10px' }}>
                                                <img src={require('../img/oo.png')} id='ooimage' alt='img' />
                                            </div>

                                            incorporate with other companies, other than partnerships.
</div>
                                        <div style={{ minHeight: '60px', display: 'flex' }}   >
                                            <div style={{ paddingRight: '10px' }}>
                                                <img src={require('../img/oo.png')} id='ooimage' alt='img' />
                                            </div>

                                            import and purchase of machinery, equipment and various materials that company deems appropriate
to achieve the company's activity. 
        </div>

        <div style={{ minHeight: '60px', display: 'flex' }}   >
                                            <div style={{ paddingRight: '10px' }}>
                                                <img src={require('../img/oo.png')} id='ooimage' alt='img' />
                                            </div>
                                            deal with banks and financial institutions, practicing all financial and banking activities related to its
work, open credit and current accounts with banks, and having the right to deposit and withdraw,
establish and confirm all commercial papers, accept documentary and non-documentary transfers as
well as cheques, bills of lading, warehouse documents, request banking facilities and perform all
transactions that serve its purposes and the activity.
                    
        </div>
                                     
                                    </div>

                                </Col>

                            </Row>

                        </div>

                    </ScrollAnimation>
                </Container>
                <Container>
                    <ScrollAnimation animateIn='fadeInUp' animationInDelay='1000'  >

                        <div style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                            , flexDirection: 'column', width: '100%', margin: 0, padding: 0
                        }} >

                            <Row style={{ marginRight: 0, marginTop: '3%', marginBottom: '2%' }} >
                                <h3 id='why'>Management of the Company</h3></Row>



                            <Row style={{ marginRight: 0, marginTop: '2%', marginBottom: '2%' }} id='rowabout1' >

                                <Col xs={12} style={{ width: '100%' }}>

                                    {/* <div style={{ width: '100%',  display: 'flex', margin: '5px', alignItems: 'center' }} id='proftext1'  >
                                    <div style={{ paddingRight: '10px' }}>
                                        <img src={require('../img/circle.png')} style={{ height: '15px' }} alt='img' />
                                    </div>
                                مقاول يملك جميع أسهم الشركة وهو المدير المفوض للشركة
        </div>
                                <div style={{ width: '100%', display: 'flex', margin: '5px' }} id='proftext1'   >
                                    <div style={{ paddingRight: '10px' }}>
                                        <img src={require('../img/circle.png')} style={{ height: '15px' }} alt='img' />
                                    </div>

                                    حصلت على شهادة ممارسة المهنة والصادرة من اتحاد الناقلين العراقيين بالإضافة هوية عضوية اتحاد الناقلين العراقيين المركز العام.
        </div>
                                <div style={{ width: '100%', display: 'flex', margin: '5px' }} id='proftext1'   >
                                    <div style={{ paddingRight: '10px' }}>
                                        <img src={require('../img/circle.png')} style={{ height: '15px' }} alt='img' />
                                    </div>
                                    حصلت الشركة على (الدرجة الأولى) في اختصاص النقل العام حسب هوية اتحاد الناقليـــــــــن العراقيين 1735 في 6/12/2009 </div>
                                <div style={{ width: '100%', display: 'flex', margin: '5px' }}  id='proftext1'  >
                                    <div style={{ paddingRight: '10px' }}>
                                        <img src={require('../img/circle.png')} style={{ height: '15px' }} alt='img' />
                                    </div>
                                    الانتساب الى غرفة تجارة البصرة بالاختصاص (تجارة عامة ونقل عام) بالرقم 20774 فـــــي
                            25 / 4 /2010
</div> */}



                                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }} id='proftext1'   >

                                        <div style={{ minHeight: '60px', display: 'flex' }} >

                                            The Company's management consists of the following key personnel, as follows:
                                            </div>



                                        <div style={{ minHeight: '60px', display: 'flex' }} >
                                            <div style={{ paddingRight: '10px' }}>
                                                <img src={require('../img/circle.png')} style={{ height: '15px' }} alt='img' />
                                            </div>
                                            A contractor who owns all the shares of the company and is the Managing Director of the company.
                                            </div>

                                        <div style={{ minHeight: '60px', display: 'flex' }}  >
                                            <div style={{ paddingRight: '10px' }}>
                                                <img src={require('../img/circle.png')} style={{ height: '15px' }} alt='img' />
                                            </div>
                                            The executive office consists of specialists and long-experience in the business of general
        transport, import and export to provide the recommendations required.

</div>

                                        <div style={{ minHeight: '60px', display: 'flex' }}   >
                                            <div style={{ paddingRight: '10px' }}>
                                                <img src={require('../img/circle.png')} style={{ height: '15px' }} alt='img' />
                                            </div>

                                            Lawyer (Riwaq Fadhel) holds legal office and handles legal matters.

</div>
                                        <div style={{ minHeight: '60px', display: 'flex' }}   >
                                            <div style={{ paddingRight: '10px' }}>
                                                <img src={require('../img/circle.png')} style={{ height: '15px' }} alt='img' />
                                            </div>
                                            The chartered accountant, Adel Ayed, handles the accounting work that is related to the
company.
</div>
                                        <div style={{ minHeight: '60px', display: 'flex' }}   >
                                            <div style={{ paddingRight: '10px' }}>
                                                <img src={require('../img/circle.png')} style={{ height: '15px' }} alt='img' />
                                            </div>

                                            Each of the above categories is related to several persons and according to specialization, if
necessary.
        </div>


                                    </div>


                                </Col>

                            </Row>

                        </div>

                    </ScrollAnimation>
                </Container>

                <Container>
                    <ScrollAnimation animateIn='fadeInUp' animationInDelay='1000'  >

                        <div style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                            , flexDirection: 'column', width: '100%', margin: 0, padding: 0
                        }} >


                            <Row style={{ marginRight: 0 }}>   <h3 id='why'>Official classification of the company </h3></Row>




                            <Row style={{ marginRight: 0, marginTop: '2%', paddingBottom: '5%' }} id='rowabout1' >
                                <Col xs={12} style={{ width: '100%' }}>



                                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }} id='proftext1'   >
                                        <div style={{ minHeight: '60px', display: 'flex' }} >
                                            <div style={{ paddingRight: '10px' }}>
                                                <img src={require('../img/star.png')} style={{ height: '15px' }} alt='img' />
                                            </div>
                                            The company gained the certificate of incorporation from the Ministry of Trade No. RC 02- 74216
                                           on 22/11/2009.
                                                 </div>

                                        <div style={{ minHeight: '60px', display: 'flex' }}  >
                                            <div style={{ paddingRight: '10px' }}>
                                                <img src={require('../img/star.png')} style={{ height: '15px' }} alt='img' />
                                            </div>
                                            I obtained the Certificate of Practicing the Profession issued by the Federation of Iraqi Carriers in
                                           addition to the identity of the membership of the Federation of Iraqi Carriers - General Center.

                                                 </div>

                                        <div style={{ minHeight: '60px', display: 'flex' }}   >
                                            <div style={{ paddingRight: '10px' }}>
                                                <img src={require('../img/star.png')} style={{ height: '15px' }} alt='img' />
                                            </div>

                                            The company obtained (First Class) in the specialty of general transport according to the identity of
                                           the Federation of Iraqi Carriers numbered (1735) on 6/12/2009.

                                                       </div>
                                        <div style={{ minHeight: '60px', display: 'flex' }}   >
                                            <div style={{ paddingRight: '10px' }}>
                                                <img src={require('../img/star.png')} style={{ height: '15px' }} alt='img' />
                                            </div>

                                            Membership in Basra Chamber of Commerce by specialization (general trade and general
                                             transportation) numbered (20774) on 25/4/2010.
                                                  </div>



                                    </div>

                                </Col>

                            </Row>

                        </div>

                    </ScrollAnimation>
                </Container>
                 <Row id='rroo' style={{ marginRight: '0px', width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Col xl={4} id='colomnservices1'   >
<div  id='divcolss' >
<div style={{padding:'10px'}} > <img src={require('../img/value.png')} style={{ height: '40px' }}  alt='img' />   </div>
        <p style={{ fontSize:'22px',fontWeight:'500' }}  >Vision</p>
        <p style={{padding:'10px'}} id='fontvision'   >
            Our vision is to become the best and most efficient company in the services we provide from the
transfer of the year of all kinds and delivery of goods to our customers.</p>
</div>


    </Col>

    <Col xl={4} id='colomnservices1' >
    <div  id='divcolss'>
    <div style={{padding:'10px'}} > <img src={require('../img/reliability.png')} style={{ height: '40px' }}  alt='img' />   </div>
        <p style={{ fontSize:'22px',fontWeight:'500'}} id='butonbading' >values </p>
        <p id='fontvision' style={{padding:'10px'}} >Ambition, efficiency, transparency, perseverance.</p>
        <p>  </p>
     <p></p>
     <p></p>
    
    </div>
    </Col>
    <Col xl={4} id='colomnservices12' >
  
    <div style={{padding:'10px'}}  > <img src={require('../img/badge.png')} style={{ height: '40px' }}  alt='img'  />   </div>
        <p style={{fontSize:'22px',fontWeight:'500' }} id='butonbading' >Emblem</p>
        <p id='fontvision' style={{padding:'10px'}}  > Full confidence, high quality, safety.</p>
  <p>  </p>
  <p>  </p>
  <p>  </p>
  <p></p>
    
    </Col>


</Row> 
            </div>
        )
    }
}
export default About;