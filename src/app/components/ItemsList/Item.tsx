import * as React from 'react';

export interface IItemProps {
    name: string;
    age: number;
}

export class Item extends React.Component<any, any> {

    constructor(props: IItemProps) {
        // noinspection TypeScriptValidateTypes: super(props) error probably will be gone in phpstorm 2017.2.6
        super(props);
        this.state = props;
    }

    public render() {
        const {value} = this.props;
        return (
            <tr>
                <td>{value}</td>
                <td><button type="button" className="btn btn-default">remove</button></td>
            </tr>
        )
    };

}