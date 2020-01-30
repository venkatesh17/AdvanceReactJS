import React from "react"

function Typography() {
    return(
        <div>
            <div className="container">
                <h1>h1 Bootstrap heading (2.5rem = 40px)</h1>
                <h2>h2 Bootstrap heading (2rem = 32px)</h2>
                <h3>h3 Bootstrap heading (1.75rem = 28px)</h3>
                <h4>h4 Bootstrap heading (1.5rem = 24px)</h4>
                <h5>h5 Bootstrap heading (1.25rem = 20px)</h5>
                <h6>h6 Bootstrap heading (1rem = 16px)</h6>
            </div>
            <hr/>
            <div className="container">
                <h1>Display Headings</h1>
                <p>Display headings are used to stand out more than normal headings (larger font-size and lighter font-weight):</p>
                <h1 className="display-1">Display 1</h1>
                <h1 className="display-2">Display 2</h1>
                <h1 className="display-3">Display 3</h1>
                <h1 className="display-4">Display 4</h1>
            </div><hr/>
            <div className="container">
                <h1>Lighter, Secondary Text</h1>
                <p>The small element is used to create a lighter, secondary text in any heading:</p>       
                <h1>h1 heading <small>secondary text</small></h1>
                <h2>h2 heading <small>secondary text</small></h2>
                <h3>h3 heading <small>secondary text</small></h3>
                <h4>h4 heading <small>secondary text</small></h4>
                <h5>h5 heading <small>secondary text</small></h5>
                <h6>h6 heading <small>secondary text</small></h6>
            </div><hr/>
            <div className="container">
                <h1>Highlight Text</h1>    
                <p>Use the mark element to <mark style={{color:"red"}}>highlight</mark> text.</p>
            </div>
            <hr />
            <div className="container">
                <h1>Abbreviations</h1>
                <p>The abbr element is used to mark up an abbreviation or acronym:</p>
                <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
                <p>The <abbr title="Java Script">JS</abbr></p>
            </div>
            <hr />
            <div className="container">
                <h1>Blockquotes</h1>
                <p>The blockquote element is used to present content from another source:</p>
                <blockquote className="blockquote">
                    <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
                    <footer className="blockquote-footer">From WWF's website</footer>
                </blockquote>
                <blockquote className="blockquote">
                    <p>Don't be pushed around by the fears in your mind. 
                        Be led by the dreams in your heart.</p>
                        <footer className="blockquote-footer"> Roy T. Bennett, The Light in the Heart</footer>
                </blockquote>
            </div>
            <hr/>
            <div class="container">
                <h1>Description Lists</h1>    
                <p>The dl element indicates a description list:</p>
                <dl>
                    <dt>Coffee</dt>
                    <dd>- black hot drink</dd>
                    <dt>Milk</dt>
                    <dd>- white cold drink</dd>
                </dl>
                <dl>
                    <dt>Tiffen</dt>
                    <dd>- Dosa</dd>   
                    <dd>- Chapathi</dd> 
                </dl>     
            </div>
            <hr/>
            <div class="container">
                <h1>Code Snippets</h1>
                <p>Inline snippets of code should be embedded in the code element:</p>
                <p>The following HTML elements: <code>span</code>, <code>section</code>, and <code>div</code> defines a section in a document.</p>
                <p>Welcomr to <code>JS</code></p>
            </div>
            <hr/>
            <div class="container">
                <h1>Keyboard Inputs</h1>
                <p>To indicate input that is typically entered via the keyboard, use the kbd element:</p>
                <p>Use <kbd>ctrl + p</kbd> to open the Print dialog box.</p>
                <p>Save we can use <kbd>ctrl + s</kbd></p>
            </div>
            <hr/>
            <div class="container">
                <h1>Multiple Code Lines</h1>
                <p>For multiple lines of code, use the pre element:</p>
                <pre>
                    Text in a pre element
                    is displayed in a fixed-width
                    font, and it preserves
                    both      spaces and
                    line breaks.
                </pre>
                <pre>
                    welcomeo
                    To
                    Hyderabad
                </pre>
            </div>
        </div>  
    )  
}

export default Typography;