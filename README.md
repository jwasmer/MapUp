# MapUp

MapUp (in development) is a data visualization tool allowing organizations to see opportunities for member meetups.

I developed the concept for this project while enrolled at Turing, a tech bootcamp, after realizing that there were no good tools on the market that allowed students to visualize the almuni network of their alma mater. Turing has an alumni network based primarily in Denver, CO, so I was left to fend for myself in Burlington, VT--I didn't identify local alumni until the program had already concluded, and it's difficult to determine if there are other local alumni I can connect with that I'm still unaware of.

MapUp is a tool that solves this problem by registering members to their appropriate organizations and generating an [isochrone](https://en.wikipedia.org/wiki/Isochrone_map#:~:text=An%20isochrone%20(iso%20%3D%20equal%2C,areas%20of%20equal%20travel%20time.) polygon representing the geographic area they're willing to travel within to attend a meetup. Other users registered to that organization (either organization administrators or members) can then use this information to identify areas that are currently underserved by networking events, or, in my own case, can connect with their own local network.

## Features

### Map

The most straightforward feature of the project, the map will display user isochrone polygons for all other users within a given organization. As an alumni of the Turing School of Software and Design, for example, this would allow me to see isochrones for all other members of Turing's organization. I can then use this data and the tools within the app to plan events based on member hotspots.

### Organizations (WIP)

Organizations are the buckets that sort user data into meaningful groups. Once a user joins an organization they'll be given access to that organization's user map. This map will contain user isochrones (to maintain user privacy, these isochrones will be sanitized of their specific user data). Users may then plan events based on the overlap of these isochrones--the more isochrones that overlap, the more users there are willing to travel to that location for an event.

Organizations will allow administrators to be assigned to moderate user membership, and these administrators will be given tools to add/remove/invite new members. Looking beyond the MVP, a more complete data visualization toolkit would provide value to organizations seeking to track member engagement in different regions, and access to more advanced organization tools would likely form the basis of any paid subscription model.

### Events (WIP)

Events are the desired end-state of using this product. While event planning tools exceed the scope of this project's MVP, they're next on-deck for the project's roadmap. Ultimately, the user experience should allow a user to join an organization, view a membership map, select a location on that map, create an event, and invite members whose isochrones overlap that event. It's important to reiterate that the isochrones will not give access to specific user data beyond the isochrone polygon itself--that is, with the exeption of organization administrators, clicking on an isochrone will not reveal the member assigned to that isochrone nor provide any personal details about the user that isochrone represents. When planning an event, a user would write an email or in-app notification which would be sent to the still-anonymous members, who could then RSVP in response. An event planning interface would allow the event planner to track these RSVPs and update event information (dates, locations, fees, activities, etc).

## Technologies

MapUp is built in Next.js and TypeScript with a Supabase backend and e2e tests written in Cypress. A goal of this project was to minimize the use of third party libraries when appropriate--I considered using UI libraries but decided to keep the project as lean as possible.

## Installation

The app is currently a work in progress, deployment coming as soon as the MVP is complete!
