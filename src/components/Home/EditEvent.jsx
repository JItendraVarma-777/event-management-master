import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addEvent, deleteEvent, getEvent, updateEvent } from '../../Data/data';
import InputFeild from '../reusable/InputFeild';
import EventService from '../reusable/EventService'

export default class EditEvent extends Component {
  state = {
    id: '',
    name: '',
    description: '',
    eventDate: '', 
    amount: '',
    startTime: '3',
    endTime: '4',
    venue: '',
    image : '',
    edit: false
  };
  handleSubmit = () => {
    const { name, eventDate, id, amount, description,startTime,endTime,venue,image } = this.state;
    if (this.state.edit) {
      console.log('update');
      updateEvent({ id, name, description, eventDate, amount,startTime,endTime,venue,image});
    } else {
      addEvent({ id, name, description, eventDate, amount,startTime,endTime,venue,image});
    }
    return this.props.history.push('/events');
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleDelete = () => {
    deleteEvent(this.state.id);
    this.props.history.push('/events');
  };

  componentDidMount() {
    const { eventId } = this.props.match.params;
    if (eventId) {
      const event = getEvent(+eventId);
      if (!event) return this.props.history.push('/event-not-found');
      this.setState({
        id: event.id,
        name: event.name,
        description: event.description,
        eventDate: event.eventDate,
         amount: event.amount,
        startTime: event.startTime,
        endTime: event.endTime,
        venue: event.venue,
        image: event.image,
        edit: true,
      });
    }
  }
  saveEvent = (e) =>{
    e.preventDefault();
    let event={name: this.state.name,
              description: this.state.description,
              eventDate: this.state.eventDate,
              amount : this.state.amount,
              startTime: this.state.startTime,
              endTime :  this.state.endTime,
              venue : this.state.venue,
              image : this.state.image
              
            
            }
    console.log('event=> '+ JSON.stringify(event));
    EventService.createEvent(event).then(res =>{
      this.props.history.push('/events');
      alert("added")
    }).catch(err =>{console.log(err)})

  }
  render() {
    return (
      <div>
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <InputFeild
              handleChange={this.handleChange}
              value={this.state.name}
              label="Name"
              name="name"
            />
            
          </div>
          <label>Description</label>
          <textarea
            className="form-control"
            onChange={(e) => this.setState({ description: e.target.value })}
            value={this.state.description}
            label="Description"
            name="description"
            rows="3"
          />
          <InputFeild
              handleChange={this.handleChange}
              value={this.state.date}
              label="Event Date"
              name="eventDate"
              type="date"
            />
          <div className="form-row">
            <InputFeild
              handleChange={this.handleChange}
              value={this.state.price}
              label="Event Registration Price"
              name="amount"
              type="number"
            />
            <InputFeild
              handleChange={this.handleChange}
              value={this.state.location}
              label="venue"
              name="venue"
            />
          </div>
          
          <div className="form-row">
            <InputFeild
              handleChange={this.handleChange}
              value={this.state.startTime}
              label="Start Time"
              name="startTime"
              type="time"
            />
            <InputFeild
              handleChange={this.handleChange}
              value={this.state.endTime}
              label="End Time"
              name="endTime"
              type="time"
            />
            <InputFeild
              handleChange={this.handleChange}
              value={this.state.image}
              label="Image"
              name="image"
              type="text"
            />
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <button  className="btn btn-primary btn-block" onClick={this.saveEvent}>
               Add Event
              </button>
            </div>
            <div className="form-group col-md-4">
              <Link to="/events" className="btn btn-warning btn-block">
                Cancel
              </Link>
            </div>
            <div className="form-group col-md-4">
              <button
                className="btn btn-danger btn-block"
                type="button"
                onClick={this.handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </form>
        </div>
        
      </div>
    );
  }
}
