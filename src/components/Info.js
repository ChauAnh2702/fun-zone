export default function Info() {
    return (
        <section id="info" className="info">
            <div className="list">
                <div className="item">
                    <h3>Park Infomation</h3>
                    <p>
                        Address: 01, Xuan Thuy Street, Thao Dien Ward, HCMC<br />
                        Email: <a href="mailto:someone@example.com">thefunzone@gmail.com</a><br />
                        Phone: 0888810000
                    </p>
                </div>

                <div className="item">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.7961845305636!2d5.04886028225515!3d51.65089942506293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c696a9aff44307%3A0x443bdab1ed5cb89a!2sEfteling!5e0!3m2!1sen!2s!4v1653653238977!5m2!1sen!2s" 
                        width="100%" height="260" style="border:0; border-radius: 6px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe> */}
                    <iframe 
                        width="100%" height="260" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" 
                        src="https://maps.google.com/maps?width=520&amp;height=260&amp;hl=en&amp;q=Xuan%20Thuy%20Thao%20Dien%20Ho%20Chi%20Minh+(01)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                </div>

                <div className="item">
                    <img src="images/opp.gif" alt="business opportunities" />
                </div>

                <div className="item">
                    <h3>Business Opportunities</h3>
                    <p>
                        Do you want to held an meeting or event in the Fun Zone? 
                        Or do you consider organising a business day out to our theme park?
                    </p>
                    <p>
                        <strong>Business information:</strong><br />
                        The Fun Zone<br />
                        COC number: 18122297<br />
                        VAT number: 007372930B01
                    </p>
                </div>
            </div>
        </section>
    )
}