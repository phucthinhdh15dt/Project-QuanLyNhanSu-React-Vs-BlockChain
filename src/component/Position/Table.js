import React, {Component} from 'react';
import * as StringNavigation from '../../constants/NavigationConstants';
import {callApi, callApiPaging, callApiDelete } from './../../utils/ConnectApi';
import { Link,Redirect,NavLink  } from 'react-router-dom';
import './table.css';
import Loading from './../../component/Loading/Loading';
 class Table extends Component {
  state = {
    status : '',
    repos: 0 ,
    msgerr : '',
    page : 1 ,
    search : '',
    count : 0 ,
    zindex : 1
  }

 componentDidMount(){
    this.loadingData();
 }
 onChangeSearch=(e)=> {
    this.setState({
        search: e.target.value
    });
   
  }
  ActionSearch =async() =>{
   await this.loadingDataSearch();
  }
  showMsg = () => {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  loadingDataSearch =async () => {
    this.setState({ 
        zindex : 1
        });
    callApiPaging('position',null,null,this.state.page+"&search="+this.refs.search.value)
        .then(async(response) => {
            await this.setState({ 
              repos: response.data.results,
              zindex : -1000
              });
        })
        .catch(function (error) {
           
        })

  }
 
  loadingData =async () => {
     
    callApiPaging('positions',null,null,this.state.page)
        .then(async(response) => {
            await this.setState({ 
              repos: response.data.results,
              count : response.data.count ,
              zindex : -1000
              });
        })
        .catch(function (error) {
            console.log(error);
        })

  }
       confirmDelete =async (idDelete) =>{
        this.setState({ 
            zindex : 1
            });
          
            await callApiDelete(`position`, null, "null",idDelete)
            .then(res => this.setState({ 
                 status: res.status,
                 zindex : -1000
              }))
           .catch(error => console.log("Fetch Error "+ error));
          await this.loadingData();  
          await this.showMsg();
        
    }
     rederdelete =()=>{
       
      this.loadingData();
     }
     setPagePlus =async()=>{
            
       
            
                await   this.setState({ 
                    page: this.state.page + 1 ,
                    zindex : 1
                  })
                await this.loadingData() ;
                
             
          
        
    }
    setPage =async()=>{

        
            if(this.state.page===1){
                await   this.setState({ 
                    msgerr: "" ,
                    zindex : -1000
                  
                  })
            }
            if(this.state.page!==1)
             await   this.setState({ 
            page: this.state.page - 1,
            zindex : 1
          })
      
      await this.loadingData()
      
    
    }
     
  
     showListTable = (repos, prototype) =>{
      var result =[] ;
      
      if(repos.length > 0){
          result = repos.map((tableJson, index) =>{
              return <tr key={tableJson.index}> 
              <td>{index+1}</td>
              <td style={{textAlign : "left"}}>{tableJson[prototype[1]]}</td>
              <td>{tableJson[prototype[2]]}</td>
              <td style={{textAlign : "left"}}>{tableJson[prototype[3]]}</td>
              <td>{tableJson[prototype[4]]}$</td>
            <td> 
            {/* data-toggle="modal" data-target="#exampleModalDelete" */}
               
                
                <NavLink to={`/trang-chu/chuc-vu/sua/${tableJson[prototype[0]]}`} activeClassName="active"><button className="btn btn-primary btn-xs madow" title="Sửa" ><span class="glyphicon glyphicon-edit"></span> </button> </NavLink>  &nbsp;
                 <button data-toggle="modal" data-target={'#'+tableJson[prototype[0]]+'delete'}   className="btn btn-danger btn-xs madow"   title="Xóa"><span class="glyphicon glyphicon-trash"></span></button> &nbsp;
                
                <div class="modal fade" id={tableJson[prototype[0]]+'delete'}  role="dialog" aria-labelledby="confirmDeleteLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title">Xóa chức vụ</h4>
                    </div>
                    <div class="modal-body">
                        <p>Bạn có chắc chắn xóa</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal"  onClick={()=>this.confirmDelete(tableJson[prototype[0]])} id="confirm">Delete</button>
                    </div>
                    </div>
                </div>
                </div>

            </td>
            
          </tr>
          } );
      }
   
      return  result;
  }     

   convertArrayOfObjectsToCSV =(args)=> {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }


    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

 downloadCSV = args => {
    var data, filename, link;

    var csv = this.convertArrayOfObjectsToCSV({
        data: this.state.repos
    });
    if (csv == null) return;

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
}

   showListHeader = (arrayHeader) =>{
    var result =null ;
    if(arrayHeader.length > 0){
        result = arrayHeader.map((item, index) =>{
            return <th style={{textAlign : "center"}}>{item}</th>
        } );
    }
    return  result;
  }    

    render(){
    
        var {prototype} =this.props;
       
        var {headerTable} = this.props;
        var {title} =this.props;
        var repos = this.state.repos;
        var msgerr =this.state.msgerr;
         
        return (
          
          <div className="content-wrapper" >
          <Loading  zindex ={this.state.zindex}/>
            <section className="content">
              <div className="row">
                <div className="col-xs-12">
                  <div className="box">
                    <div className="box-header">
                     <center> <div style={{fontWeight :'bold' ,color : 'blue' ,fontSize : '20px'}} className="box-title">{title}</div> </center>
                     <br />
                    </div>
                    <div className="form-group has-warning has-feedback col-xs-3 search">
                      <input type="text" ref='search' onChange={this.onChangeSearch} style={{border : "1px solid #3c8dbc"}}  className="form-control" id="inputWarning" placeholder="Tìm kiếm" />
                     <button className="btn btn-primary btn-block margin-bottom" style={{width : "40px"}} onClick={this.ActionSearch} > <span class="glyphicon glyphicon-search" > </span></button>
                    
                  </div>
                    <div className="col-xs-7">
                    
                    <div className="title">Quản lý chức vụ </div> 
                    </div>
                    <div className="col-xs-1" >
                    
                     <NavLink to={`/trang-chu/chuc-vu/them`} activeClassName="active" >
                     <button className="btn btn-primary btn-block margin-bottom madow" style={{width: "80px"}} name="BUTTON_EDIT" ><span class="glyphicon glyphicon-plus"></span> Thêm </button>
                    
                      </NavLink>
                      <br />
                      <br />
  
                    </div>
                    <div className="col-xs-1" >
                    
                    <button  className="btn btn-primary btn-block margin-bottom " title="download CSV" onClick={()=>this.downloadCSV({ filename: StringNavigation.TITLE_NAVIGATION_QUANLYNHANSU.replace(/ /g, '-')+"-DATA.csv"})}  ><span class="glyphicon glyphicon-save-file"></span></button>
                     
                     <br />
                     <br />
                    
                   </div>
                    <br/>
                    <div className="box-body" >
                  <div style={{height:"450px"}}>
                    <table className="table table-bordered table-hover tablecss">
                      <thead>
                        <tr style={{textAlign: "center"}}>
                         {this.showListHeader(headerTable)}
                        </tr>

                      </thead>
                      <tbody  >
                        {this.showListTable(repos, prototype)}
                      </tbody>

                    </table>
                    </div>
                    <br/>
                    <div  className="row">
                        <div className="col-sm-12">
                        
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-7"></div>
                        <div className="col-sm-5 pull-right" >
                            <nav aria-label="Page navigation example" >
                                <ul class="pagination pull-right" style={{marginTop: "10px"}}>
                                <li class="page-item"  className="col-sm-5" style={{ width: "160px"}}>
                                    <button className="btn btn-primary btn-block margin-bottom"  onClick={this.setPage}>
                                    <span class="glyphicon glyphicon-fast-backward"></span> Trước đó 
                                    </button>
                                </li>
                                
                                <li class="page-item"  className="col-sm-5" style={{width: "160px"}}>
                                    <button className="btn btn-primary btn-block margin-bottom"  onClick={this.setPagePlus} >
                                    Tiếp theo  <span class="glyphicon glyphicon-fast-forward"></span>
                                    </button>
                                </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div id="snackbar">Xóa thành công</div>
        </div>


        )
       
    }

    
}


export default Table;


