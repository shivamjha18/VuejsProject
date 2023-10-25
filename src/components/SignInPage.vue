<template>
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="bg-white text-black">
            <div class="p-5 text-center">
              <div class="mb-md-5">
                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-black-50 mb-5">
                  Please enter your login and password!
                </p>

                <div class="form form-white mb-4">
                  <input
                    type="email"
                    id="typeEmailX"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typeEmailX">Email</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input
                    type="password"
                    id="typePasswordX"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typePasswordX">Password</label>
                </div>

                <button class="btn btn-primary" type="submit">Login</button>
                <p class="small mb-5 pb-lg-2">
                  <a class="text-black-50" href="#!">Forgot password?</a>
                </p>
                <div>
                  <p class="mb-0">
                    Don't have an account?
                    <router-link to="/signup">SignUp</router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "SignInPage",
};
</script>
