import React, { Component } from 'react'
import './SalesRanking.css';

class SalesRanking extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    items: data
                });
                console.log("data=====>", data)
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const { error, isLoaded, items } = this.state;
        console.log("items==", items)
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="sales-list">
                    <p>Sales Ranking</p>
                    <tabel className="sales-table" >
                        {
                            items.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.address.geo.lng} </td>
                                </tr>
                            ))
                        }
                    </tabel>

                </div>
            )
        }
    }
}

export default SalesRanking
