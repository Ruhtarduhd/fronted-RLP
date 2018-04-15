//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


//MaterialUI
  //Components
    import Drawer from 'material-ui/Drawer';
    import AppBar from 'material-ui/AppBar'
    import RaisedButton from 'material-ui/RaisedButton'
    import Avatar from 'material-ui/Avatar';
    import Paper from 'material-ui/Paper';
    import
      {List,
      ListItem}
    from 'material-ui/List';
    import Subheader from 'material-ui/Subheader';
    import Divider from 'material-ui/Divider';
    import Business from 'material-ui/svg-icons/communication/business'
  //Colors


//Actions


//Components

//companies
  const companies = [
    {
      id: 1,
      companyName: 1,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
        {
          id: 1,
          firstName: '1',
          lastName: '1',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '1',
        },
        {
          id:2,
          firstName: '2',
          lastName: '2',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '1',
        },
        {
          id:3,
          firstName: '3',
          lastName: '3',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '1',
        },
        {
          id:4,
          firstName: '4',
          lastName: '4',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '1',
        },
      ]
    },
    {
      id: 2,
      companyName: 2,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
        {
          id: 5,
          firstName: '5',
          lastName: '5',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '2',
        },
        {
          id: 6,
          firstName: '6',
          lastName: '6',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '2',
        },
        {
          id: 7,
          firstName: '7',
          lastName: '7',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '2',
        },
        {
          id: 8,
          firstName: '8',
          lastName: '8',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '2',
        },
      ]
    },
    {
      id: 3,
      companyName: 3,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
        {
          id: 9,
          firstName: '9',
          lastName: '9',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '3',
        },
        {
          id: 10,
          firstName: '9',
          lastName: '9',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '3',
        },
        {
          id: 1,
          firstName: '10',
          lastName: '10',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '3',
        },
        {
          firstName: '11',
          lastName: '11',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '3',
        },
      ]
    },
    {
      id: 4,
      companyName: 4,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
        {
          firstName: '12',
          lastName: '12',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '4',
        },
        {
          firstName: '13',
          lastName: '13',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '4',
        },
        {
          firstName: '14',
          lastName: '14',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '4',
        },
        {
          firstName: '15',
          lastName: '15',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '5',
        },
      ]
    },
    {
      id: 5,
      companyName: 5,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
        {
          firstName: '16',
          lastName: '16',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '5',
        },
        {
          firstName: '17',
          lastName: '17',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '5',
        },
        {
          firstName: '18',
          lastName: '18',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '5',
        },
        {
          firstName: '19',
          lastName: '19',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '5',
        },
      ]
    },
    {
      id: 6,
      companyName: 6,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 7,
      companyName: 8,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 8,
      companyName: 9,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 9,
      companyName: 10,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 10,
      companyName: 11,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 11,
      companyName: 13,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 12,
      companyName: 14,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 13,
      companyName: 15,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 14,
      companyName: 16,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 15,
      companyName: 17,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 16,
      companyName: 18,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 17,
      companyName: 19,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
  ]

class InternalContactOverview extends PureComponent {
  state = {
    drawer: true,
    currentUser: {
      firstName: 'Nigel',
      lastName: 'Brown',
      picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
      company: 'Codasseur',
    },
  }

  handleToggle = () => this.setState({drawer: !this.state.drawer});

  componentWillMount() {
    let employelist = {x: 'placeholder'}
  }

	render() {

		return (
      <div style={{
        textAlign: 'center',
      }}>
        <Paper
          style={{
            position: 'relative',
            top: 80,
            botom: 10,
            left: '25%',
            width: '50%',
          }}
        >
          <List
            style={{
              position: 'relative',
              height: 550,
              overflow: 'scroll',
              }}
          >
            <Subheader
              style={{
                fontSize: 40,
              }}
            >Companies</Subheader>
            <Divider
              style={{
                padding: 5,
                marginBottom: 5,
              }}
            />
            <Divider />
            {companies.map((company) => (
              <div>
              <ListItem
                value={company.id}
                primaryText={`${company.companyName}`}
                leftAvatar={<Avatar src={`${company.companyLogo}`} />}
                nestedItems={[
                  <ListItem
                    value={2}
                    primaryText="Grace Ng"
                    leftAvatar={<Avatar src='https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg'/>}
                  />,
                ]}
              />
              <Divider />
              </div>
            ))
            }
          </List>
        </Paper>
      </div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
	}
}

export default connect(mapStateToProps)(InternalContactOverview)