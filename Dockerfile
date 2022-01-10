FROM ruby:2.5.3

RUN gem install bundler

COPY . /wheeldogg.github.io

COPY Gemfile .
COPY Gemfile.lock .

RUN bundle install 

WORKDIR /wheeldogg.github.io

EXPOSE 4000

CMD ["bundle", "exec","jekyll", "serve", "--host", "0.0.0.0", "--port", "4000"]