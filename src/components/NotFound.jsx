import React from 'react';

export default class NotFound extends React.Component {
  	render() {
    	return (
           	<div className="content">
		    	<h3>
		    		Opsss rota não encontrada :( <code>{location.pathname}</code>
		    	</h3>
		  	</div>
    	);
  	}
}