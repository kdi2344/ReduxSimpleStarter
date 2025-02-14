import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
    renderTitleField(field){
        return (
            <div>
                <input
                    type="text"
                    {...field.input} 
                />
            </div>
        );
    }

    render(){
        return(
            <form>
                <Field
                    name="title"
                    component={this.renderTitleField}  // providing reference
                />
            </form>
        );
    }
}

export default PostsNew;
