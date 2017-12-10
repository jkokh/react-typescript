import './ItemsList.sass';

import * as React from 'react';

import { Item } from './Item';

export interface IItemsListState {
    items: string[];
}

export class ItemsList extends React.Component<any, IItemsListState> {

    constructor(props: any) {
        // noinspection TypeScriptValidateTypes: super(props) error probably will be gone in phpstorm 2017.2.6
        super(props);
        this.state = {
            items: ['one', 'two', 'three']
        }
    }

    public render() {
        return (
            <div className="itemsList">
                <h2>Todo list</h2>

                <form className="form-inline">
                    <div className="form-group">
                        <label className="sr-only">Add New Item</label>
                        <input type="text" className="form-control" id="inlineFormInput" placeholder="Jane Doe"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add to list</button>
                </form>

                <table className="table">
                    <thead>
                    <tr>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.items.map((item, index) => {
                        return (
                            <Item key={index} value={item}/>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    };

}