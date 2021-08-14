import React from "react";
import Avatar from "../Employee/Avatar";
import Name from "../Employee/Name";
import Position from "../Employee/Position";

class ListItem extends React.Component {
    render() {
        return (
            <li>
                <Avatar />
                <Name />
                <Position />
            </li>
        );
    }
}

export default ListItem;

