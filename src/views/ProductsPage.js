// import React, { Component } from 'react';
// import { PageTemplate } from 'templates/PageTemplate';
// import PropTypes from 'prop-types';
// import { routes } from 'routes/index';
// import { Card } from 'components/molecules/Card/Card';
// import { ubrania, kocyki, torebki, chusty, pluszaki } from '../data/data';

// class ProductsPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { pageType: 'torebki' };
//   }

//   componentsDidMount() {
//     const { match } = this.props;
//     switch (match.path) {
//       case routes.torebki:
//         this.setState({ pageType: 'torebki' });
//         break;
//       case routes.chusty:
//         this.setState({ pageType: 'chusty' });
//         break;
//       case routes.pluszaki:
//         this.setState({ pageType: 'pluszaki' });
//         break;
//       case routes.ubrania:
//         this.setState({ pageType: 'ubrania' });
//         break;
//       case routes.kocyki:
//         this.setState({ pageType: 'kocyki' });
//         break;
//       default:
//         // eslint-disable-next-line no-console
//         console.log('Sorry its wrong prop');
//     }
//   }

//   render() {
//     const { pageType } = this.state;

//     return (
//       <PageTemplate pageType={pageType}>
//         {`${pageType}`.map((item) => (
//           <Card
//             typeOfCard={pageType}
//             title={item.title}
//             price={item.price}
//             desc={item.desc}
//             color={item.category}
//             type={item.type}
//             imageUrl={item.imageUrl}
//             createdTime={item.createdTime}
//             key={item.id}
//           />
//         ))}
//       </PageTemplate>
//     );
//   }
// }

// ProductsPage.propTypes = {
//   match: PropTypes.string.isRequired,
// };
// export default ProductsPage;
