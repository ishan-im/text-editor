            import React  from 'react'

            export default function About(props) {
               

                
                const darkStyle = {

                    color:"white",
                    backgroundColor:"#121212",
                    border:"1px solid white"
                }


                const lightStyle = {

                    color:"black",
                    backgroundColor:"white"

                }
                
                const style = (props.mode === 'dark' ? darkStyle : lightStyle)

                console.log(props.mode);

                return (
                  <div className="container" style={style}>
                    <h2 className="my-3 text-center">About Us</h2>

                    <div
                      className="accordion"
                      id="accordionExample"
                      style={style}
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            style={style}
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            About Text Emotion
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body" style={style}>
                            Text Emotion is a free app that allows you to
                            create, edit and print text files on your computer
                            and web browser.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed "
                            style={style}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Get Started
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body" style={style}>
                            To use this app try write some text on the input
                            field. Then you can apply several change to it. Use
                            preview section to preview the text. You can
                            download the text locally by pressing the print
                            button.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            style={style}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            How it works
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body" style={style}>
                            This is a pure React web app. All the process is
                            done in the internet locally. This app works in all
                            operating sysstem.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            }
