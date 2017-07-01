import {GoogleApiWrapper} from 'google-maps-react';
import Container from './Container';

const WrappedContainer = GoogleApiWrapper({
  apiKey: "AIzaSyD98nxotdxRqVB9UwLUS-lq_HABOe0j0qU"
})(Container)

export default WrappedContainer;