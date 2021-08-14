import React from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import EmployeeList from "../../components/EmployeeList";
import ListItem from "../../components/EmployeeListItem";

class Homepage extends Component {
    render() {
        return (
            <>
                <Header titulo={"Employee Directory"} />
                <SearchBar />
                <EmployeeList>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </EmployeeList>
                </>
        );
    }
}

export default Homepage;

