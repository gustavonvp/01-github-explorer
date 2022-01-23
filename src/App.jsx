import {render} from 'react-dom';
import React, {Component} from 'react';
import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'

export class App extends Component {
    render() {
            return(
                <RepositoryList />
            )
    }
    
}
