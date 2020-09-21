import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Indexhome from '../../Layout/Secctions/Home/indexhome';

function Routing(){

        return(<>
                <Route path="/home" exact component={Indexhome} />
                <Route path="/contact" component={Indexhome} />
                <Route path="/location" component={Indexhome} />
                <Route path="/weus" component={Indexhome} />
                <Route path="/promos" component={Indexhome} />
                <Route path="/destacados" component={Indexhome} />
                <Route path="/new" component={Indexhome} />
                <Route path="/clothes" component={Indexhome} />
                <Route path="/items" component={Indexhome} />
                <Route path="/things" component={Indexhome} /> 
       </>
        );
};
export default Routing;
