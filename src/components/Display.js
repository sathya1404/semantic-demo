import React, { Component } from "react";
import {
  Container,
  Grid,
  Image,
  Button,
  GridRow,
  GridColumn,
  List,
  Icon,
  Segment,
  Header,
} from "semantic-ui-react";

class Display extends Component {
  render() {
    return (
      <div>
        <div>
          <Container textAlign="left">
            <Grid celled className="main-grid-layout">
              <Grid.Row>
                <Grid.Column width={10}>
                  <h2>
                    We need people who’ve recovered from coronavirus (COVID-19)
                    to donate blood plasma, as part of a clinical trial to help
                    with the national effort against the virus.
                  </h2>
                  <h2>
                    The trial will tell us how effective convalescent plasma
                    (plasma from people who’ve had coronavirus) is for treating
                    coronavirus patients.
                  </h2>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Image   className="display-image" src="https://nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/18244/donor-carer-bisuits.jpg" 
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={10}>
                  <container textAlign="right">
                    <h1>How you can help</h1>
                    <h4>
                      If you have had a positive test result for COVID-19, or
                      have had symptoms of COVID-19, you can help us by
                      registering to donate plasma.
                    </h4>
                    <h4>
                      Not everyone will be able to donate. You need to meet some
                      eligibility criteria:
                    </h4>
                    <ul>
                      <li>be between 17 and 66 years old</li>
                      <li>weigh more than 50kg</li>
                      <li>
                        not be pregnant, or had a baby, miscarriage or
                        termination within six months
                      </li>
                      <li>not have an existing or previous heart condition</li>
                      <li>not have had a transfusion since 1st January 1980</li>
                      <li>
                        live close enough to donate at one of our 23 main donor
                        centres.
                      </li>
                    </ul>
                    <Button positive>Register your details</Button>
                    <p>
                      <i>
                        We will be in contact over the coming weeks around any
                        next steps. Acceptance to donate will depend on the form
                        and follow-up contacts before donation
                      </i>
                    </p>
                  </container>
                </Grid.Column>

                <Grid.Column width={6}>
                  <container>
                    <h1>Want to know about plasma donation ?</h1>
                    <h4>
                      Read above who can donate and what happens at a donation.
                    </h4>
                    <Button primary className="donars-list">
                      <Icon name="angle double right" />
                      Plasma Donars
                    </Button>
                  </container>
                  <container>
                    <h1>plasma clinical trial</h1>
                    <h4>
                      convalescent plasma is being used in national clinical
                      trial.
                    </h4>
                    <Button primary className="donars-list">
                      <Icon name="angle double right" />
                      Find out more
                    </Button>
                  </container>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid columns={1}>
              <Grid.Row>
                <Grid.Column>
                  <h1>What is convalescent plasma?</h1>
                  <h3>
                    Blood plasma is a yellowish liquid that makes up about half
                    your blood volume. After a virus, your plasma contains
                    antibodies that are used to help fight infection.
                  </h3>
                  <h3>
                    Convalescent plasma is the antibody-rich plasma of someone
                    who has recovered from a virus, in this case COVID-19.
                  </h3>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <h1>Who can donate convalescent plasma?</h1>
                  <h3>
                    Convalescent plasma can only be donated by someone who has
                    had the virus. It is also important that donors have fully
                    recovered from COVID-19, and that their body has had time to
                    develop a good antibody response.
                  </h3>
                  <h3>
                    We are currently collecting plasma no sooner than 28 days
                    after recovery and can only accept donations from people who
                    are able to visit one of our main donor centres (see below).
                  </h3>
                </Grid.Column>
              </Grid.Row>
              <GridRow>
                <GridColumn>
                  <h1>Donating plasma</h1>
                  <h3>
                    Any donations will take place at one of the following donor
                    centres.
                  </h3>
                  <h3>
                    Plasma donation is not the same as blood donation. The
                    process takes around 45 minutes because it separates plasma
                    from the blood as you donate, in a process called apheresis.
                  </h3>
                  <h3>
                    We will discuss the details of your donation before you take
                    part.
                  </h3>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn>
                  <h1>Our donor centres</h1>
                  <h4>
                    <List bulleted>
                      <List.Item>Birmingham</List.Item>
                      <List.Item>Bradford</List.Item>
                      <List.Item>Bristol</List.Item>
                      <List.Item>Cambridge</List.Item>
                      <List.Item>Gloucester</List.Item>
                      <List.Item>Lancaster</List.Item>
                      <List.Item>Leeds City Centre</List.Item>
                      <List.Item>Leicester</List.Item>
                      <List.Item>Liverpool</List.Item>
                      <List.Item>London Edgware</List.Item>
                      <List.Item>London Tooting</List.Item>
                      <List.Item>London West End</List.Item>
                      <List.Item>Luton</List.Item>
                      <List.Item>Manchester Plymouth Grove</List.Item>
                      <List.Item>Manchester City Centre</List.Item>
                      <List.Item>Newscastle</List.Item>
                      <List.Item>Nottingham</List.Item>
                      <List.Item>Oxford</List.Item>
                      <List.Item>Plymouth</List.Item>
                      <List.Item>Poole</List.Item>
                      <List.Item>Sheffield</List.Item>
                      <List.Item>Southampton</List.Item>
                      <List.Item>Stoke</List.Item>
                    </List>
                  </h4>
                </GridColumn>
              </GridRow>
            </Grid>
            <Container textAlign="left">
              <Button primary icon labelPosition="right">
                Give Feedback
                <Icon name="plus square outline" />
              </Button>
              {/* want to create a horzontal line and has icon of up arrow */}
            </Container>
            <hr />
            <div>
              <span>Contact us </span>
              <span>/</span>
              <span>Slite map</span>
              <span>/</span>
              <span>Accessibility</span>
              <span>/</span>
              <span>Cookie information</span>
              <span>/</span>
              <span>Equality and divercity</span>
              <span>/</span>
              <span>Freedom of information and privacy</span>
            </div>
            <div>
              <Container textAlign="right">
                <Button circular color="facebook" icon="facebook" />
                <Button circular color="twitter" icon="twitter" />
                <Button circular color="youtube" icon="youtube" />
              </Container>
            </div>
            <br />
            <div>
              <container textAlign="center">
                
                  <Button inverted color="red">
                    Blood Donations
                  </Button>
                  <Button inverted color="pink">
                    Organ Donations
                  </Button>
                  <Button inverted color="olive">
                    platelet Form
                  </Button>
                  <br />
                  <br />
                  <Button inverted color="yellow">
                    Careers
                  </Button>
                  <Button inverted color="green">
                    Hospitals and Science
                  </Button>
                  <Button inverted color="orange">
                    OTD clinical
                  </Button>
                
              </container>
            </div>
            <div className="home-secondary">
              <Container textAlign="right">
            <img
            height="50px"
            width="auto"
            className="pic"
            src="https://nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/3760/nhsbt-left-align_scaled.svg"
            size="small"
          />
          </Container>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Display;
