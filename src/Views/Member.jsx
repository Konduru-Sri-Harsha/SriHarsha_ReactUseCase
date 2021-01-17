import React, { Component } from "react";
import "./member.css";
import BooksData from "../books.json";

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  Checkout = () => {
    alert(
      "Your order has been reserved ! You will be redirected now to Login Page"
    );
    this.props.history.push("/");
  };

  onUnReserve = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  onReserve = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  myFunction = () => {
    var input, filter, table, tr, td, i, txtValue, SelectVal;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    SelectVal = document.getElementById("type");

    for (i = 0; i < tr.length; i++) {
      if (SelectVal.value == "bookname") {
        td = tr[i].getElementsByTagName("td")[0];
      }
      if (SelectVal.value == "author") {
        td = tr[i].getElementsByTagName("td")[1];
      }
      if (SelectVal.value == "genre") {
        td = tr[i].getElementsByTagName("td")[2];
      }
      if (td) {
        txtValue = td.textContent || td.innerText;
        console.log(txtValue);
        console.log(txtValue.toUpperCase().indexOf(filter));

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          console.log(tr[i].style.display);
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };
  render() {
    this.Name = localStorage.getItem("userName");
    return (
      <div className="MemberHome">
        <header className="Header1">
          <h2 className="header2"> Welcome {this.Name} </h2>
          <button onClick={this.Checkout}>
            {" "}
            &#10098;{this.state.count}&#10099; Checkout
          </button>
        </header>

        <div className="Main-Display">
          <select
            id="type"
            name="type"
            style={({ backgroundColor: "yellow" }, { padding: "3px" })}
          >
            <option style={{ color: "red" }} value="bookname">
              BookName
            </option>
            <option style={{ color: "red" }} value="author">
              Author
            </option>
            <option style={{ color: "red" }} value="genre">
              Genre
            </option>
          </select>
          <div className="myInput">
           
            <input
              type="text"
              className="SearchBox"
              id="myInput"
              onChange={this.myFunction}
              placeholder="&#10154; Search for names.."
              title="Type in a name"
            ></input>
          </div>

          <table id="myTable">
            <tr class="header">
              <th style={{ width: "350px" }}>Book Title</th>
              <th style={{ width: "350px" }}>Author</th>
              <th style={{ width: "250px" }}>Genre/Type</th>
            </tr>

            {BooksData.map((result, index) => {
              return (
                <tr>
                  <td>{result.BookName}</td>
                  <td>{result.Author}</td>
                  <td>{result.Genre}</td>
                  <td>
                    <button className="loop" onClick={this.onReserve}>Reserve</button>
                  </td>
                  <td>
                    <button
                      className="loop1"
                      onClick={this.onUnReserve}
                    >Cancel</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default Member;
