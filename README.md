# ClearScore Tech Test

Congratulations on being selected to progress to the next stage of the interview process and to complete our tech test. The purpose of this test is to assess the quality of the code that you write, your approach to problem solving, and your ability to reason about the approaches and practices you have implemented.

There isn't necessarily a _correct_ or _perfect_ submission for this test, different approaches have various benefits and downsides, however you will be expected to defend your decisions if you are asked to attend a face-to-face interview.

In the same vein, do not worry too much about how much progress you make through each part of the test, but rather **make sure that what you _do_ complete is of a high, production-ready, standard**. We expect you to spend around 4 hours on this task.

If you have any questions please do not hesitate to contact us.

## The Task

At ClearScore we have created our own version of what is known as a _Design System._ In short what this means is that every page across our product is built from the same base design elements: buttons, headings, icons, etc. which are pulled in and utilised everywhere to reduce bugs, improve consistency, and increase velocity.

For your submission you will build a microcosm of this Design System.

### The Component

We're hoping to improve our user's experience by implementing an attractive "Insights" feature in the report section. These will be used to highlight certain aspects of a user's report, both in terms of what is going well and what can be improved.

Please implement this feature, consuming a subset of a credit report JSON payload in order to conditionally display the on/off track tokens. The component consists of a header, with either a horizontally scrollable list or grid of cards underneath, depending on the current viewport size. Each card is identical but for the pills & text therein.

![image](https://user-images.githubusercontent.com/21218317/76093511-fb1fae00-5fb8-11ea-98eb-2effebc28477.png)

### The Design System

The following are all the measurements and different values you will need to complete the task

**Border radii**

- `8px`
- `4px`

**Colours**

- "Midnight": `#253648`
- "Gallery": `#F7F7F8`
- CTA: `#0F81A3`
- CTA (hover): `#66AEC5`
- Green pill text: `#15693B`
- Green pill background: `#DDF9EA`
- Orange pill text: `#764C25`
- Orange pill background `#FDEFE2`
- Gray pill background `#EEEFF1`

**Font sizes**

- `20px`
- `16px`
- `14px`
- `12px`

**Font weights**

- `normal`
- `bold`

**Spacing**

- `24px`
- `16px`
- `10px`
- `8px`
- `4px`

**Shadows**
- `0 0.5rem 0.75rem rgba(0,0,0,0.16)`;

**Breakpoints**

- Small: `375px`
- Medium: `768px`
- Large: `1024px`
- Extra Large: `1280px`

### **Language**

The following language is to be used for each card. The language is the same whether or not something is "on track" or "off track".

- Header: Public information
  - Body: Bankruptcies and individual voluntary arrangements can damage your score
  - Impact: High Impact
- Header: Credit utilisation
  - Body: Using more than 50% of your available credit can damage your score
  - Impact: Medium Impact
- Header: Electoral roll
  - Body: Being on the electoral roll can improve your score
  - Impact: Medium Impact

For clarity, the on/off track language is as follows:

- On Track
- Off Track

### Business Logic

The following describes the logic for determining whether or not a particular user is on or off track depending upon their credit report JSON.

**Public information**

Under the `personal` property, then `publicInfo` , if the list `courtAndInsolvencies` has any elements then this insight is "OFF TRACK"

**Credit utilisation**

Under the `accounts` property, if there is an object with the `accountCategory` of `credit_cards` where `overview.balance.amount` is 50% or more of `overview.limit.amount` then this insight is "OFF TRACK".

**Electoral roll**

Under the `personal` property, there is an array called `electoralRoll`, if there is an entry with a `true` value on the `current` property, then this insight is "ON TRACK"

### The Designs

More detailed screenshots can be found at [/design](/design).

**Small**

![image](https://user-images.githubusercontent.com/21218317/76093511-fb1fae00-5fb8-11ea-98eb-2effebc28477.png)

**Medium**

![image](https://user-images.githubusercontent.com/21218317/76093517-fce97180-5fb8-11ea-8516-9925ff68bbac.png)

**Large**

![image](https://user-images.githubusercontent.com/21218317/76093524-feb33500-5fb8-11ea-8aaa-79ff22b37e7b.png)

**Extra large**

![image](https://user-images.githubusercontent.com/21218317/76093528-01158f00-5fb9-11ea-9b92-cea5910a0e38.png)

**Designers comments:**

> The width of the card is dependent on the screen, and on small and medium screens 2 cards are full visible, with only small amount of the third visible.
>
> The height of the card is dependent on the copy, but all cards should be the same height.

### Project setup

It's up to you what frameworks and libraries you would like to utilise in this project, if any, but please note we are a React house. Additionally, you may demonstrate your work either as a part of a fully functioning app or by integrating with a component showcase framework.

If you use React, we recommend you use `create-react-app` as this will give you a lot of functionality for free, however if you have your own boilerplate then you are welcome to use that instead. Please separate the boilerplate and your own work into separate commits to make the work of the reviewers easier.

We recently started using [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) (with Jest) for our unit/functional tests, but feel free to use what you are comfortable with. As in the real world, no code can go into production untested, please do write some tests!

Please include a [COMMENTS.md](http://comments.md) with any decisions you made that you feel are worth highlighting and concessions you had to make due to the time constraints, as well as anything else you think we should be aware of when reviewing your code.

## Junior Applicants

Feel free to use the [mock-report.json](/mock-report.json) directly

## Mid+ Applicants

Please implement fetching the [report](/mock-report.json) via http call from the following API

- [https://api.jsonbin.io/b/6107fbe9f14b8b153e05e714](https://api.jsonbin.io/b/6107fbe9f14b8b153e05e714)

## Senior Applicants / Stretch Goals

We'd love to see how the to implement an interaction where clicking the 'Electoral role' cards shows more [Insight Details](/mock-insight-details.json) found in this API:

 - [https://api.jsonbin.io/b/6128c389c5159b35ae04d4ed/1](https://api.jsonbin.io/b/6128c389c5159b35ae04d4ed/1)

The additional information can be display how you like (e.g. modal, drawer, tool-tip etc). Our example is a 'drawer' which comes from the right shown within [/stretch-goal](/stretch-goal).

**Designers comments:**

> The 'drawer' UI is still being worked on, sorry! Please don't spend any time on the look and feel.
>
> The features are good to go though. We should show/hide the insight description with an 'on/off track' tag, the title and relevant description along with the additional information.

# What to focus on

- Getting more than one breakpoint implemented
- Sticking to the design
- Scalable / maintainable code

Good luck!
