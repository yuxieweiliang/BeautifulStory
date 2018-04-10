import React, { Component } from 'react';
import RootView from '../../script/common'
<<<<<<< HEAD
import func from './behavior'
=======
import { Link } from 'react-router-dom'
import func from './behavior'
import OutView from '../OutView'

>>>>>>> bc90f470b6fe40a654e99bdca2ced3b351127673
export default class extends RootView {
  constructor(props) {
    super(props)
    this.method._extend(this, func);
  }
  render() {
<<<<<<< HEAD
    const { dynamic } = this.state
    return(<div className="wrapper wrapper-content animated fadeInRight">

      <div className="row">
        <div className="col-sm-12">
          <div className="ibox float-e-margins">
            <div className="ibox-title">
              <h5>分类</h5>
              <div className="ibox-tools">
                <a className="collapse-link" data-toggle="modal" data-target="#addClass">
                  <i className="fa fa-plus"/>
                </a>
              </div>
            </div>
            <div className="ibox-content">

              <table className="table table-bordered">
                <thead>
                <tr>
                  <th width="10%">#</th>
                  <th width="70%">企业动态</th>
                  <th className="text-center" width="20%">操作</th>
                </tr>
                </thead>
                <tbody>
                {
                  dynamic && (
                    dynamic.map((item, i) => (
                      <tr key={i}>
                        <td>{i}</td>
                        <td>{item}</td>
                        <td className="text-center">
                          {/*<a to="product-add" className="btn btn-primary btn-sm">编辑</a>*/}
                          <button className="btn btn-danger btn-sm">删除</button>
                        </td>
                      </tr>
                    ))
                  )
                }

                </tbody>
              </table>
=======

    return(<OutView>
      <div className="wrapper wrapper-content animated fadeInRight">

        <div className="row">
          <div className="col-sm-12">
            <div className="ibox float-e-margins">
              <div className="ibox-title">
                <h5>简单示例</h5>
                <div className="ibox-tools">
                  <a className="collapse-link">
                    <i className="fa fa-chevron-up"></i>
                  </a>
                  <a className="dropdown-toggle" data-toggle="dropdown" href="form_basic.html#">
                    <i className="fa fa-wrench"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-user">
                    <li><a href="form_basic.html#">选项1</a>
                    </li>
                    <li><a href="form_basic.html#">选项2</a>
                    </li>
                  </ul>
                  <a className="close-link">
                    <i className="fa fa-times"></i>
                  </a>
                </div>
              </div>
              <div className="ibox-content">
                <form className="form-horizontal m-t" id="commentForm">
                  <div className="form-group">
                    <label className="col-sm-2 control-label">产品名称：</label>
                    <div className="col-sm-8">
                      <input id="cname" name="name" minlength="2" type="text" className="form-control" required="" aria-required="true"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">产品简介：</label>
                    <div className="col-sm-8">
                      <input id="cemail" type="email" className="form-control" name="email" required="" aria-required="true"/>
                      <span className="help-block m-b-none"><i className="fa fa-info-circle"/>这里写点提示的内容</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">产品图片：</label>
                    <div className="col-sm-8">
                      <input id="curl" type="url" className="form-control" name="url"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">说明：</label>
                    <div className="col-sm-8">
                      <textarea id="ccomment" name="comment" className="form-control" required="" aria-required="true"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-8 col-sm-offset-2">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" className="checkbox" id="agree" name="agree"/>
                          发布
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-8 col-sm-offset-2">
                      <button className="btn btn-primary" type="submit">提交</button>
                    </div>
                  </div>
                </form>
              </div>
>>>>>>> bc90f470b6fe40a654e99bdca2ced3b351127673
            </div>
          </div>
        </div>

<<<<<<< HEAD
      <div className="modal fade" id="addClass" tabindex="-1" role="dialog" aria-labelledby="addClassLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title" id="myModalLabel">添加动态</h4>
            </div>
            <div className="modal-body row">
              <div className="form-group">
                <div className="col-sm-12">
                  <textarea onChange={this._enterpriseDynamic} id="ccomment" name="comment" className="form-control" required="" aria-required="true"/>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
              <button onClick={this._addDynamic} type="button" className="btn btn-primary">提交</button>
            </div>
          </div>
        </div>
      </div>
    </div>)
=======
      </div>
    </OutView>)
>>>>>>> bc90f470b6fe40a654e99bdca2ced3b351127673
  }
}