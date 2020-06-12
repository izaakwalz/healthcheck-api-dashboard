import React from 'react';
import {
  // Collapse,
  // Navbar,
  // NavbarToggler,
  // NavbarBrand,
  // Nav,
  // NavItem,
  //   NavLink,
  FormGroup,
  Label,
  Input,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  //   NavbarText,
} from 'reactstrap';
import LoginModal from '../components/LoginModal';
import { Table } from 'reactstrap';

const select = new Array(4);
select['API'] = ['Select Your Api'];
select['GET'] = [
  'http..//jgjgkh.com',
  'http://hvjbkbjlb.com',
  'http://hvjbkbjlb.com',
  'http://hvjbkbjlb.com',
];
select['POST'] = [
  'http..//jgjgkh.com',
  'http://hvjbkbjlb.com',
  'http://hvjbkbjlb.com',
  'http://hvjbkbjlb.com',
];
select['PUT'] = [
  'http..//jgjgkh.com',
  'http://hvjbkbjlb.com',
  'http://hvjbkbjlb.com',
  'http://hvjbkbjlb.com',
];
select['DELETE'] = [
  'http..//jgjgkh.com',
  'http://hvjbkbjlb.com',
  'http://hvjbkbjlb.com',
  'http://hvjbkbjlb.com',
];

const FormNavBar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [api, setApi] = useState('');

  // const toggle = () => setIsOpen(!isOpen);

  // const onChange = (selectObj) => {
  //   let idx = selectObj.selectedIndex;
  //   let which = selectObj.options[idx].value;
  //   let cList = select[which];
  // };

  return (
    <div style={{ marginTop: '1rem' }}>
      <Table>
        <thead>
          <tr>
            <th>
              <FormGroup>
                <Label for='exampleSelect'>Request Type</Label>
                <Input type='select' name='select' id='exampleSelect'>
                  <option> GET </option>
                  <option>POST</option>
                  <option>PUT</option>
                  <option>DELETE</option>
                </Input>
              </FormGroup>
            </th>
            <th>
              <FormGroup>
                <Label for='endpoints'>End Points</Label>
                <Input type='select' name='select' id='link'>
                  <option> hgxckhcjkvlknln </option>
                  <option>jbljnlkmnlmlm;l</option>
                  <option>nmb,n,mmn.,n,n.</option>
                  <option>mnbm,n.,n.</option>
                  <option>hbjkkbkmlm.,/</option>
                </Input>
              </FormGroup>
            </th>
            <th>
              <FormGroup>
                <Label for='examplePassword'>Password</Label>
                <Input
                  type='text'
                  name='apilink'
                  id='apilink'
                  placeholder='api'
                />
              </FormGroup>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>Lgin</th>
            <td>
              <LoginModal />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default FormNavBar;
