import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    // return (
    //     <div style={{marginLeft: '35%', marginRight:'35%', marginTop: '5%'}}>
    //         <div class="ui middle aligned center aligned grid">
    //             <div class="column">
    //                 <h2 class="ui blue image header">

    //                 <div class="content">
    //                     Register your account
    //                 </div>
    //             </h2>
    //             <form class="ui large form">
    //                 <div class="ui stacked segment">
    //                     <div class="field">
    //                         <div class="ui left icon input">
    //                             <i class="user icon"></i>
    //                             <input type="text" placeholder="Username"/>
    //                         </div>
    //                     </div>
    //                     <div class="field">
    //                         <div class="ui left icon input">
    //                             <i class="lock icon"></i>
    //                             <input type="password" name="password" placeholder="Password"/>
    //                         </div>
    //                     </div>
    //                     <div class="field">
    //                         <div class="ui left icon input">
    //                             <i class="lock icon"></i>
    //                             <input type="password" name="password" placeholder="Confirm Password"/>
    //                         </div>
    //                     </div>
    //                     <div class="ui fluid large blue submit button">Register</div>
    //                 </div>

    //             <div class="ui error message"></div>

    // </form>
    // </div>
    // </div>
    // </div>
    // );
//     return (
//         <div style={{marginLeft: '35%', marginRight:'35%', marginTop: '5%'}}>
//         <div class="ui middle aligned center aligned grid">
//             <div class="column">
//                 <h2 class="ui blue image header">

//                     <div class="content">
//                         Log-in to your account
//                     </div>
//                 </h2>
//                 <form class="ui large form">
//                     <div class="ui stacked segment">
//                         <div class="field">
//                             <div class="ui left icon input">
//                                 <i class="user icon"></i>
//                             <input type="text" name="email" placeholder="Username"/>
//                         </div>
//                         </div>
//                         <div class="field">
//                         <div class="ui left icon input">
//                             <i class="lock icon"></i>
//                             <input type="password" name="password" placeholder="Password"/>
//                         </div>
//                         </div>
//                         <div class="ui fluid large blue submit button">Login</div>
//                     </div>

//                 <div class="ui error message"></div>

//     </form>

//     <div class="ui message">
//       New to us? <a href="#">Register</a>
//     </div>
//   </div>
//     </div>
//     </div>
// );
    return (
        <div>
            <h1 style={{textAlign: 'center', width: '50%'}}>eInsider</h1>
            <div class="ui secondary  menu" style={{width: '50%'}}>
                <a class="item active">Home</a>
                <a class="item">Fantasy</a>
                <a class="item">Profile</a>
                <div class="right menu">
                    <a class="ui item">Logout</a>
                </div>
            </div>

            <div class="ui grid" style={{width: '50%'}}>
                <div class="twelve wide stretched column">
                    <div class="ui segment">
                        <h1>Scores</h1>
                        <div class="ui placeholder">
                            <div class="paragraph">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                            <div class="paragraph">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                        <h1>Schedule</h1>
                        <div class="ui placeholder">
                            <div class="paragraph">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                            <div class="paragraph">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="four wide column">
                    <div class="ui vertical fluid right tabular menu">
                        <a class="active item" style={{width: '150px'}}>LoL<i class="star icon" style={{color: 'yellow'}}></i></a>
                        <a class="item" style={{width: '150px'}}>Dota 2 <i class="star icon" style={{color: 'yellow'}}></i></a>
                        <a class="item" style={{width: '150px'}}>Overwatch<i class="star outline icon" style={{color: 'yellow'}}></i></a>
                        <a class="item" style={{width: '150px'}}>CSGO<i class="star outline icon" style={{color: 'yellow'}}></i></a>
                        <a class="item" style={{width: '150px'}}>Call of Duty<i class="star outline icon" style={{color: 'yellow'}}></i></a>
                        <a class="item" style={{width: '150px'}}>Quake<i class="star outline icon" style={{color: 'yellow'}}></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
    // return (
    //     <div>
    //         <h1 style={{textAlign: 'center', width: '50%'}}>eInsider</h1>
    //         <div class="ui secondary  menu" style={{width: '50%'}}>
    //             <a class="item">Home</a>
    //             <a class="item">Fantasy</a>
    //             <a class="item active">Profile</a>
    //             <div class="right menu">
    //                 <a class="ui item">Logout</a>
    //             </div>
    //         </div>
    //
    //         <div class="ui grid" style={{width: '50%'}}>
    //             <div class="twelve wide stretched column">
    //                 <div class="ui segment">
    //                     <h1>Leagues You Are In</h1>
    //                     <div class="ui placeholder">
    //                         <div class="paragraph">
    //                             <div class="line"></div>
    //                             <div class="line"></div>
    //                             <div class="line"></div>
    //                             <div class="line"></div>
    //                             <div class="line"></div>
    //                         </div>
    //                         <div class="paragraph">
    //                             <div class="line"></div>
    //                             <div class="line"></div>
    //                             <div class="line"></div>
    //                         </div>
    //                     </div>
    //                     <div class="ui placeholder">
    //                         <div class="paragraph">
    //                             <div class="line"></div>
    //                             <div class="line"></div>
    //                             <div class="line"></div>
    //                             <div class="line"></div>
    //                             <div class="line"></div>
    //                         </div>
    //                         <div class="paragraph">
    //                             <div class="line"></div>
    //                             <div class="line"></div>
    //                             <div class="line"></div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="four wide column">
    //                 <div class="ui vertical fluid right tabular menu">
    //                     <a class="item" style={{width: '150px'}}>Favorites</a>
    //                     <a class="active item" style={{width: '150px'}}>Fantasy Leages</a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
