import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import NavigationComponent from './NavigationComponent'
import ContentComponent from './ContentComponent'

export default class HomeComponent extends Component {
    render() {
        return (
            <div className="container-fuild home"> 
                <div className="row">
                    <div className="col-12">
                        HomeComponent
                        <HeaderComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <NavigationComponent />
                    </div>
                </div>

            </div>
        )
    }
}
