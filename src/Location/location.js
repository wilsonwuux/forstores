import React from 'react'
import Iframe from 'react-iframe';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

function LocalBranch(){
    return(
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.5044966932774!2d-90.56395418563044!3d14.6272798803449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1b30d78c3df%3A0xfe0c5dbe97441e53!2sPaiz!5e0!3m2!1ses!2sgt!4v1600503706033!5m2!1ses!2sgt" 
    width="500" 
    height="250" 
    frameborder="0" 
    style={{border:0}}
    allowfullscreen=""
    aria-hidden="false" 
    tabindex="0">
    </Iframe>
    )
}
export default LocalBranch;