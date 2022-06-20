import React, { Component } from 'react';
import './setting.css';
class Settings extends Component {
    render() {
        return(
              
            <div class="box">
            
            <input type="file" id="file" name="image" />
            <label for="file">Change Picture</label>
            
            <input type="text" placeholder="User Name" name="" />
            <input type="Email" placeholder="Email ID" name="" />
            <input type="number" placeholder="Phone Number" name="" />
            <input type="text" name="" placeholder="Gender"/>
            <input type="reset" value="CANCEL" name="CANCEL"/>
            <input type="submit" value="DONE" name="DONE"/>
            
            </div>

        );
    }
}

export default Settings;
