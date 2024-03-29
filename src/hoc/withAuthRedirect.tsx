import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

type MapPropsType = {
    isAuth: boolean
}

type DispatchPropsType = {}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>){
    const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
        let {isAuth, ...resProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <WrappedComponent {...resProps as unknown as WCP}/>
    }

    let ConnectedAuthRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(
        mapStateToPropsForRedirect)
    (RedirectComponent)


    return ConnectedAuthRedirectComponent
}

