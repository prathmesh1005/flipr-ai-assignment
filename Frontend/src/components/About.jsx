function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-800">About Us</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming businesses through innovative digital solutions and strategic excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Who We Are</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a team of passionate professionals dedicated to helping businesses grow and succeed in the digital age. With years of experience and a commitment to excellence, we deliver innovative solutions that drive real results. Our team consists of experienced developers, designers, and strategists working together to create meaningful impact.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to empower organizations with cutting-edge technology and strategic insights that transform challenges into opportunities for growth and success. We believe in building long-term partnerships with our clients and contributing to their business transformation journey.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Quality Focus</h4>
                  <p className="text-gray-600">We maintain the highest standards of quality in every project we undertake, ensuring excellence at every step.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🚀</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Innovation</h4>
                  <p className="text-gray-600">Staying at the forefront of technology, we implement cutting-edge solutions tailored to your needs.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💼</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Partnership</h4>
                  <p className="text-gray-600">We treat every client as a partner, working collaboratively to achieve your business objectives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-10 shadow-lg mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Excellence</h4>
              <p className="text-gray-600">Delivering exceptional quality in every deliverable</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Integrity</h4>
              <p className="text-gray-600">Building trust through transparent communication</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Creativity</h4>
              <p className="text-gray-600">Thinking outside the box for unique solutions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Growth</h4>
              <p className="text-gray-600">Committed to continuous improvement and success</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
            <p className="text-gray-700 font-semibold">Projects Completed</p>
            <p className="text-gray-600 text-sm mt-2">Successfully delivered across diverse industries</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
            <p className="text-gray-700 font-semibold">Happy Clients</p>
            <p className="text-gray-600 text-sm mt-2">Building lasting relationships with partners</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">10+ Years</div>
            <p className="text-gray-700 font-semibold">Industry Experience</p>
            <p className="text-gray-600 text-sm mt-2">Expertise built through years of innovation</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
