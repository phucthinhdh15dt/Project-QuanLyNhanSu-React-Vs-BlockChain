import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link ,Switch } from "react-router-dom";

import PesonnelContainer from '../container/PesonnelContainer/PesonnelContainer';
import TeamContainer from '../container/TeamContainer/TeamContainer';
import ProjectContainer from '../container/ProjectContainer/ProjectContainer';
import Home from '../component/Home/Home';
import Detail from '../container/PesonnelContainer/component/Detail';
import ModalCreate from '../container/PesonnelContainer/component/ModalCreate';
import ModalEdit from '../container/PesonnelContainer/component/ModalEdit';

//quan ly team
import ModalCreateTeam from '../container/TeamContainer/component/ModalCreate';
import ModalEditTeam from '../container/TeamContainer/component/ModalCreate';
import RedirectTeam from '../container/TeamContainer/component/RedirectTeam';
export default class RouterURL extends Component {
    render(){
        return (
                <div>
                    <Switch >
                        {/* quan ly nhan su */}
                        <Route exact path="/home/nhan-su-chinh-thuc" component={PesonnelContainer} />
                        <Route exact path="/home/lich-su-du-an" component={ProjectContainer} />
                        <Route exact path="/home/nhan-su-chinh-thuc/them"  component={ModalCreate}/>}/>
                        <Route exact path="/home/nhan-su-chinh-thuc/chi-tiet/:id" component={Detail} />
                        <Route exact path="/home/nhan-su-chinh-thuc/sua/:id"  component={ModalEdit}/>}/>

                         {/* quan ly team */}
                        <Route exact path="/home/nhom" component={TeamContainer} />
                        <Route exact path="/home/nhom/them"  component={ModalCreateTeam}/>}/>
                        <Route exact path="/home/nhom/chi-tiet/:id" component={Detail} />
                        <Route exact path="/home/nhom/sua/:id"  component={ModalEditTeam}/>}/>
                        <Route exact path="/home/chuyen-nhom"  component={RedirectTeam}/>}/>
                       
                        
                        {/* trang chu */}
                        <Route path="/home" component={Home} />
                        
                        <Route component={Home} />
                        
                    </Switch>
                </div>
        )
    }
}
