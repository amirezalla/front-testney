@extends('../layout/layouts')
@section('content')
    <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">Edit User</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-6">

            <!-- BEGIN: Form Layout -->
            <form id="categories-store" name="categories-store"  action="{{route('nfts-update',$nft->id)}}" class="" method="post">

                @csrf

                <div class="intro-y box p-5">
                    <div>
                        <label for="crud-form-1" class="form-label">category</label>
                        <input name="title" id="crud-form-1" type="text" class="form-control w-full" value="{{$nft->category}}" placeholder="Input text">
                    </div>
                    <div>
                        <label for="crud-form-1" class="form-label">Mint Address</label>
                        <input name="mint_address" id="crud-form-1" type="text" class="form-control w-full" value="{{$nft->mint_address}}" placeholder="Input text">
                    </div>
                    <div>
                        <label for="crud-form-1" class="form-label">user Address</label>
                        <p id="address" class="bg-blue-900 text-white">{{$nft->user->wall_address}}</p>
                    </div>
                    <div>
                        <label for="crud-form-1" class="form-label">Name</label>
                        <input name="name" id="crud-form-1" type="text" class="form-control w-full" value="{{$nft->name}}" placeholder="Input text">
                    </div>
{{--                    --}}
                    <div>
                        <label for="crud-form-1" class="form-label">Status</label>
                        <select value="status" class="form-control w-50">
                            <option value="active" @if($nft->status=='active') selected @endif>Active</option>
                            <option value="inactive" @if($nft->status=='inactive') selected @endif>Inactive</option>
                        </select>

                    </div>
                    <div>
                        <label for="crud-form-1" class="form-label">Image</label>
                        <img id="nftImage" src="{{$nft->photo}}" alt="" style="width: 300px;height: 300px;">
                        <p id="formInputPrice">0.01</p>
                    </div>

                    <div class="mt-3">
                        <label>Description	</label>
                        <div class="mt-2">
                            <textarea name="description	" class="editor">
                                {{$nft->description	}}
                            </textarea>
                        </div>
                    </div>
                    <div class="text-right mt-5">
                        <button type="reset" class="btn btn-outline-secondary w-24 mr-1">Cancel</button>
                    </div>
                </div>
            </form>
            <button id="createSale"  class="btn btn-primary w-24" >mint</button>

            <script type="module" src="{{ URL::asset ('dist/js/nft.js') }}"></script>
            <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>

            <script type="module">
                import { ethers } from "{{URL::asset ('dist/js/ethers-5.2.esm.min.js')}}";
                import { Wenb3Modal } from "{{URL::asset('dist/js/node-modules/web3modal/dist/index.js')}}";

                import {
                    NFTMarketplaceAddress,
                    NFTMarketplaceABI,
                    transferFundsAddress,
                    transferFundsABI,
                } from "{{URL::asset ('dist/js/constants.js')}}";


                //---FETCHING SMART CONTRACT
                export const fetchContract = (signerOrProvider) =>
                    new ethers.Contract(
                        NFTMarketplaceAddress,
                        NFTMarketplaceABI,
                        signerOrProvider
                    );
                export const connectingWithSmartContract = async () => {
                    try {
                        const web3Modal = new Wenb3Modal();
                        const connection = await web3Modal.connect();
                        console.log(connection);
                        const provider = new ethers.providers.Web3Provider(connection);
                        const signer = provider.getSigner();
                        const contract = fetchContract(signer);
                        console.log(contract);
                        // const data = await contract.fetchMarketItems();
                        // console.log(data);

                        return contract;
                    } catch (error) {
                        console.log("Something went wrong while connecting with contract", error);
                    }
                };



                $("#createSale").click(async function(){

                    const url =document.querySelector("#nftImage").src;
                    const formInputPrice=document.querySelector("#formInputPrice").innerHTML;
                    const address=document.querySelector("#address").innerHTML;
                    const price = ethers.utils.parseUnits(formInputPrice, "ether");

                    const contract = await connectingWithSmartContract();
                    console.log(contract)


                    const listingPrice = await contract.getListingPrice();
                    console.log(listingPrice)

                    const transaction =  await contract.createToken(url, price,address, {
                            value: listingPrice.toString(),
                        });

                    await transaction.wait();
                    console.log(transaction);

                })
                export const createSale = async () => {




                //     } catch (error) {
                //         setError("error while creating sale");
                //         setOpenError(true);
                //         console.log(error);
                //
                // }
                }
            </script>


            <!-- END: Form Layout -->
        </div>
    </div>
@endsection
