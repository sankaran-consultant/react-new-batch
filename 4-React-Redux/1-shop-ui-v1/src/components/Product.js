import React, { Component } from 'react';
import classNames from 'classnames'
import Review from './Review';
import ReviewForm from './ReviewForm';

import store from '../store'
import { loadReviews, addNewReview } from '../actions/reviews'
import { buy } from '../actions/cart'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: 1,
            reviews: []
        }
    }

    componentDidMount() {
        let { value: product } = this.props;
        this.unsubscribe = store.subscribe(() => {
            let reviews = store.getState().reviews[product.id] || [];
            this.setState({ reviews })
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    changeTab(tabIndex) {
        let { value: product } = this.props;
        this.setState({ currentTab: tabIndex }, () => {
            if (tabIndex === 3) {
                let action = loadReviews(product.id)
                store.dispatch(action)
            }
        })
    }

    handleBuy() {
        let { value: product } = this.props;
        let action = buy(product, 1)
        store.dispatch(action);
    }

    renderBuyBtn(product) {
        if (product.canBuy) return <button onClick={e => this.handleBuy()} className="btn btn-sm btn-primary">buy</button>
        else return null;
    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => <Review value={review} key={idx} />)
    }
    handleNewReview(newReview) {
        let { value: product } = this.props;
        let action = addNewReview(product.id, newReview)
        store.dispatch(action);
    }
    renderTabPanel(product) {
        let { currentTab } = this.state;
        let panel;
        switch (currentTab) {
            case 1: {
                panel = (<div>{product.description}</div>)
                break;
            }
            case 2: {
                panel = (<div>Not Yet</div>)
                break;
            }
            case 3: {
                panel = (
                    <div>
                        {this.renderReviews()}<hr />
                        <ReviewForm onNewReview={newReview => this.handleNewReview(newReview)} />
                    </div>)
                break;
            }
            default: {
                panel = null;
            }
        }
        return panel;
    }

    render() {
        let { value: product } = this.props
        let { currentTab } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                        <img src={product.image} className="img-fluid" alt={product.name} />
                    </div>
                    <div className="col-9 col-sm-9 col-md-9 col-lg-9">
                        <h5>{product.name}</h5>
                        <h6>&#8377;{product.price}</h6>
                        {this.renderBuyBtn(product)}
                        <br />
                        <br />
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a onClick={e => this.changeTab(1)} className={currentTab === 1 ? 'nav-link active' : 'nav-link'} href="#/">Description</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={e => this.changeTab(2)} className={classNames('nav-link', { active: currentTab === 2 })} href="#/">Specification</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={e => this.changeTab(3)} className={classNames('nav-link', { active: currentTab === 3 })} href="#/">Reviews</a>
                            </li>
                        </ul>
                        {this.renderTabPanel(product)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;