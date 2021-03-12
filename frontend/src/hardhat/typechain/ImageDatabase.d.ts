/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ImageDatabaseInterface extends ethers.utils.Interface {
  functions: {
    "images(uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "numImage()": FunctionFragment;
    "uploadImage(string,string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "images",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "numImage", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "uploadImage",
    values: [string, string]
  ): string;

  decodeFunctionResult(functionFragment: "images", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "numImage", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uploadImage",
    data: BytesLike
  ): Result;

  events: {
    "ImageCreated(address,string,string,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ImageCreated"): EventFragment;
}

export class ImageDatabase extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ImageDatabaseInterface;

  functions: {
    images(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber] & {
        author: string;
        hash: string;
        description: string;
        tipAmount: BigNumber;
        tipGoal: BigNumber;
      }
    >;

    "images(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber] & {
        author: string;
        hash: string;
        description: string;
        tipAmount: BigNumber;
        tipGoal: BigNumber;
      }
    >;

    name(overrides?: CallOverrides): Promise<[string]>;

    "name()"(overrides?: CallOverrides): Promise<[string]>;

    numImage(overrides?: CallOverrides): Promise<[BigNumber]>;

    "numImage()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    uploadImage(
      _imgHash: string,
      _imgDescription: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "uploadImage(string,string)"(
      _imgHash: string,
      _imgDescription: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  images(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, BigNumber] & {
      author: string;
      hash: string;
      description: string;
      tipAmount: BigNumber;
      tipGoal: BigNumber;
    }
  >;

  "images(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, BigNumber] & {
      author: string;
      hash: string;
      description: string;
      tipAmount: BigNumber;
      tipGoal: BigNumber;
    }
  >;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  numImage(overrides?: CallOverrides): Promise<BigNumber>;

  "numImage()"(overrides?: CallOverrides): Promise<BigNumber>;

  uploadImage(
    _imgHash: string,
    _imgDescription: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "uploadImage(string,string)"(
    _imgHash: string,
    _imgDescription: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    images(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber] & {
        author: string;
        hash: string;
        description: string;
        tipAmount: BigNumber;
        tipGoal: BigNumber;
      }
    >;

    "images(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber] & {
        author: string;
        hash: string;
        description: string;
        tipAmount: BigNumber;
        tipGoal: BigNumber;
      }
    >;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    numImage(overrides?: CallOverrides): Promise<BigNumber>;

    "numImage()"(overrides?: CallOverrides): Promise<BigNumber>;

    uploadImage(
      _imgHash: string,
      _imgDescription: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "uploadImage(string,string)"(
      _imgHash: string,
      _imgDescription: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ImageCreated(
      author: null,
      hash: null,
      description: null,
      id: null,
      tipAmount: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        author: string;
        hash: string;
        description: string;
        id: BigNumber;
        tipAmount: BigNumber;
      }
    >;
  };

  estimateGas: {
    images(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "images(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    numImage(overrides?: CallOverrides): Promise<BigNumber>;

    "numImage()"(overrides?: CallOverrides): Promise<BigNumber>;

    uploadImage(
      _imgHash: string,
      _imgDescription: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "uploadImage(string,string)"(
      _imgHash: string,
      _imgDescription: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    images(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "images(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numImage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "numImage()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uploadImage(
      _imgHash: string,
      _imgDescription: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "uploadImage(string,string)"(
      _imgHash: string,
      _imgDescription: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}