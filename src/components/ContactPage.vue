<template>
  <section id="contact">
    <div class="container">
      <h1>Get In Touch</h1>
      <div class="row">
        <div class="col-md-6">
          <form class="contact-form">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Your Name.."
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                class="form-control"
                placeholder="Phone no."
              />
            </div>
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Email.." />
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                rows="4"
                placeholder="Message.."
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-md-6 contact-info">
          <div class="follow">
            <b><i class="fa fa-map-marker"></i> </b>
            Noida,UP
          </div>
          <div class="follow">
            <b><i class="fa fa-mobile"></i> </b>(+91)xxxxxxxxxx
          </div>
          <div class="follow">
            <b><i class="fa fa-envelope"></i> </b>mithila.com
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "ContactPage",
};
</script>
