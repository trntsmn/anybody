import React, { Component } from 'react';
import './MacWindow.css';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { Link } from 'react-router-dom';

class MacWindow extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			display: true,
		};
		this.toggle = this.toggle.bind(this);
	}
	
	toggle(event) {
		this.setState({ display: !this.state.display });
		event.preventDefault();
	}

	render() {
		const { title, body, href, src, children } = this.props;
		return (
			
				<Draggable>
					<div className="flex-grid-center">
						<div className="mac-window">
							<div className="title-bar">
								<div className="bars-container">
									<div className="bar"></div>
									<div className="bar"></div>
									<div className="bar"></div>
									<div className="bar"></div>
									<div className="bar"></div>
									<div className="bar"></div>
								</div>
								<a onClick={this.toggle} className="close"><span className={this.state.display ? "inner" : "inner closed"}></span></a>
								<div className="title">{title}</div>
							</div>
							{this.state.display &&
								<article>
									{src && <img src={src} alt="Image" />}
									{body && <p>{body}</p>}
									{children}
									{href && <a className="btn" target="_blank" href={href}>Let's do this</a>}
								</article>
							}
						</div>
					</div>
				</Draggable>
			
		);
	}
}
MacWindow.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string,
	href: PropTypes.string,
	src: PropTypes.string
};

export default MacWindow;
